import {NgModule} from "@angular/core";
import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {LogoutComponent} from "./logout.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {authRouting} from "./auth.routing";
/**
 * Created by Blagojce on 28.1.2017.
 */

@NgModule({
    declarations: [
        LogoutComponent,
        SigninComponent,
        SignupComponent,
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})
export class AuthModule{

}