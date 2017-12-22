import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MessageService } from "./usermessages.service";
import { Message } from "./usermessages.model";
var MessageInputComponent = /** @class */ (function () {
    function MessageInputComponent(messageService) {
        this.messageService = messageService;
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        if (this.message) {
            //Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(function (result) { return console.log(result); });
            this.message = null;
        }
        else {
            //Create
            var message = new Message(form.value.content, 'Likky');
            this.messageService.addMessage(message)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        }
        form.resetForm();
    };
    MessageInputComponent.prototype.onClear = function (form) {
        this.message = null;
        form.resetForm();
    };
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.messageEdit.subscribe(function (message) { return _this.message = message; });
    };
    MessageInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-usermessages-input',
                    templateUrl: './usermessages-input.component.html',
                },] },
    ];
    /** @nocollapse */
    MessageInputComponent.ctorParameters = function () { return [
        { type: MessageService, },
    ]; };
    return MessageInputComponent;
}());
export { MessageInputComponent };
