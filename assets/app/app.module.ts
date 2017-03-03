import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ErrorComponent} from "./errors/error.component";
import {ErrorService} from "./errors/error.service";
import {MessageModule} from "./messages/message.module";

@NgModule({
    declarations: [
        AppComponent,
        //Ova ostanuva tuka bidejki go koristime vo app.routing.ts fajlot
        //Ne treba da go ostavime MessageComponent tuka bidejki go vcituvame podolu bidejki e pocetna strana
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [BrowserModule,
        routing,
        HttpModule,
        //MessageModule-ot go vcituvame tuka
        MessageModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}