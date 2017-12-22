import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MessageComponent } from "./usermessage.component";
import { MessageListComponent } from "./usermessages-list.component";
import { MessagesComponent } from "./usermessages.component";
import { MessageInputComponent } from "./usermessages-input.component";
import { MessageService } from "./usermessages.service";
var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MessageComponent,
                        MessageListComponent,
                        MessagesComponent,
                        MessageInputComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    providers: [MessageService]
                },] },
    ];
    /** @nocollapse */
    MessageModule.ctorParameters = function () { return []; };
    return MessageModule;
}());
export { MessageModule };
