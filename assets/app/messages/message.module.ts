import {NgModule} from "@angular/core";
import {MessageComponent} from "./message.component";
import {MessageListComponent} from "./message-list.component";
import {MessageInputComponent} from "./message-input.component";
import {MessagesComponent} from "./messages.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MessageService} from "./message.service";
/**
 * Created by Blagojce on 27.1.2017.
 */

@NgModule({
    declarations:[
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers:[
        MessageService
    ]
})
export class MessageModule {

}