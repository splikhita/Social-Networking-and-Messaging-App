import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./userauth.signup.component";
import { SigninComponent } from "./userauth.signin.component";
import { LogoutComponent } from "./userauth.logout.component";
var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];
export var authRouting = RouterModule.forChild(AUTH_ROUTES);
