import {Component} from "@angular/core";

@Component({
    selector: 'app-messages',
    template: `
        <div class="row">
            <app-usermessages-input> </app-usermessages-input>
        </div>
        <hr>
        <div class="row">
            <app-usermessages-list> </app-usermessages-list>
        </div>
    `
})
export class MessagesComponent {

}