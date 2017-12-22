import { Component, OnInit } from "@angular/core";

import {Message} from "./usermessages.model";
import {MessageService} from "./usermessages.service";

@Component({
    selector: 'app-usermessages-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app
                    [message]="message"
                    *ngFor="let message of messages"> </app>
        </div>
    `
})
export class MessageListComponent implements OnInit {
    messages: Message[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                }
            );
    }
}
