import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SigninComponent } from "./userauth.signin.component";
import { SignupComponent } from "./userauth.signup.component";
import { LogoutComponent } from "./userauth.logout.component";
import { authRouting } from "./userauth.routing";
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    AuthModule.ctorParameters = function () { return []; };
    return AuthModule;
}());
export { AuthModule };
