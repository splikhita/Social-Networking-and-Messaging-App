import { Component, OnInit } from "@angular/core";
import { Message } from "./usermessages.model";
import { MessageService } from "./usermessages.service";
var MessageListComponent = /** @class */ (function () {
    function MessageListComponent(messageService) {
        this.messageService = messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MessageListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-usermessages-list',
                    template: "\n        <div class=\"col-md-8 col-md-offset-2\">\n            <app\n                    [message]=\"message\"\n                    *ngFor=\"let message of messages\"> </app>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    MessageListComponent.ctorParameters = function () { return [
        { type: MessageService, },
    ]; };
    return MessageListComponent;
}());
export { MessageListComponent };
