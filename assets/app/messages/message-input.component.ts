import {Component, OnInit} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";
/**
 * Created by Blagojce on 07.1.2017.
 */

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private messageService: MessageService) {

    }

    onSubmit(form: NgForm) {
        if (this.message) {
            //Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result),
                    error => console.error(error)
                );
            this.message = null;
        } else {
            //Create
            const message = new Message(form.value.content, 'Max');
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        //Set this.message to null, so we can edit messages as long as we want to
        //If this is not set the form will be reset, but if we click 'edit' again the message won't load in the input field for editing
        this.message = null;
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messsageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }
}