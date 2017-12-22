import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {SigninComponent} from "./userauth.signin.component";
import {SignupComponent} from "./userauth.signup.component";
import {LogoutComponent} from "./userauth.logout.component";
import {authRouting} from "./userauth.routing";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})
export class AuthModule {

}