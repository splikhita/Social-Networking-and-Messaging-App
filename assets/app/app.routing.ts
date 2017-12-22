import {Routes, RouterModule} from "@angular/router";

import {MessagesComponent} from "./user-messages/usermessages.component";
import {AuthenticationComponent} from "./user-auth/userauth.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './user-auth/userauth.module#AuthModule' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);