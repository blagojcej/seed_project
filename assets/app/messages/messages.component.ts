import {Component} from "@angular/core";
/**
 * Created by Blagojce on 08.1.2017.
 */

@Component({
    selector:'app-messages',
    template: `
                <div class="row">
                    <app-message-input></app-message-input>
                </div>
                <hr>
                <div class="row">
                    <app-message-list></app-message-list>
                </div>
            `
})

export class MessagesComponent{

}