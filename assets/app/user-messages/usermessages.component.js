import { Component } from "@angular/core";
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-messages',
                    template: "\n        <div class=\"row\">\n            <app-usermessages-input> </app-usermessages-input>\n        </div>\n        <hr>\n        <div class=\"row\">\n            <app-usermessages-list> </app-usermessages-list>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    MessagesComponent.ctorParameters = function () { return []; };
    return MessagesComponent;
}());
export { MessagesComponent };
