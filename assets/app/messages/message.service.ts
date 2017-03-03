import {Message} from "./message.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {ErrorService} from "../errors/error.service";

/**
 * Created by Blagojce on 07.1.2017.
 */

@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messsageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http, private errorService: ErrorService) {

    }

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        //kreiranje na query parametar vo URL-to za isprakanje na tokenot.
        //Dokolku tokenot postoi se ispraka vo URL-to, dokolku ne postoi se ispraka prazen string
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        //return this.http.post('http://localhost:3000/message' + token, body, {headers: headers})
        return this.http.post('https://angular2-deployment-bj.herokuapp.com/message' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                //We create this new Message to add _id on frontend, so when we click on edit button we'll know _id of editing message
                const message = new Message(
                    result.obj.content,
                    result.obj.user.firstName,
                    result.obj._id,
                    result.obj.user._id);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
        });
    }

    getMessage() {
        //return this.http.get('http://localhost:3000/message')
        return this.http.get('https://angular2-deployment-bj.herokuapp.com/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(
                        message.content,
                        message.user.firstName,
                        message._id,
                        message.user._id));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editMessage(message: Message) {
        this.messsageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        //kreiranje na query parametar vo URL-to za isprakanje na tokenot.
        //Dokolku tokenot postoi se ispraka vo URL-to, dokolku ne postoi se ispraka prazen string
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        //return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, {headers: headers})
        return this.http.patch('https://angular2-deployment-bj.herokuapp.com/message/' + message.messageId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        //kreiranje na query parametar vo URL-to za isprakanje na tokenot.
        //Dokolku tokenot postoi se ispraka vo URL-to, dokolku ne postoi se ispraka prazen string
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        //return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
        return this.http.delete('https://angular2-deployment-bj.herokuapp.com/message/' + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}