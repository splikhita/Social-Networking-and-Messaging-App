import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {MessageComponent} from "./usermessage.component";
import {MessageListComponent} from "./usermessages-list.component";
import {MessagesComponent} from "./usermessages.component";
import {MessageInputComponent} from "./usermessages-input.component";
import {MessageService} from "./usermessages.service";

@NgModule({
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
})
export class MessageModule {

}