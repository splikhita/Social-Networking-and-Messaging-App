import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./user-messages/usermessages.component";
import { AuthenticationComponent } from "./user-auth/userauth.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './user-auth/userauth.module#AuthModule' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
