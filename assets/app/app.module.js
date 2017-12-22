import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./user-auth/userauth.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { AuthService } from "./user-auth/userauth.service";
import { ErrorComponent } from "./user-errors/usererrors.component";
import { ErrorService } from "./user-errors/usererrors.service";
import { MessageModule } from "./user-messages/usermessages.module";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
