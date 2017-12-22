import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";

import { AppComponent } from "./app.component";
import {AuthenticationComponent} from "./user-auth/userauth.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {AuthService} from "./user-auth/userauth.service";
import {ErrorComponent} from "./user-errors/usererrors.component";
import {ErrorService} from "./user-errors/usererrors.service";
import {MessageModule} from "./user-messages/usermessages.module";


@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        MessageModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}