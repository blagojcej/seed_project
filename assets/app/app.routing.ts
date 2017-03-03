import {Routes, RouterModule} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
/**
 * Created by Blagojce on 09.1.2017.
 */

const APP_ROUTES: Routes=[
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent, },
    { path: 'auth', component: AuthenticationComponent, loadChildren:'./auth/auth.module#AuthModule' },
];

export const routing=RouterModule.forRoot(APP_ROUTES);