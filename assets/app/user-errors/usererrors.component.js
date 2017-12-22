import { Component, OnInit } from "@angular/core";
import { Error } from "./usererrors.model";
import { ErrorService } from "./usererrors.service";
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(errorService) {
        this.errorService = errorService;
        this.display = 'none';
    }
    ErrorComponent.prototype.onErrorHandled = function () {
        this.display = 'none';
    };
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccurred
            .subscribe(function (error) {
            _this.error = error;
            _this.display = 'block';
        });
    };
    ErrorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-error',
                    templateUrl: './usererrors.component.html',
                    styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }        \n"]
                },] },
    ];
    /** @nocollapse */
    ErrorComponent.ctorParameters = function () { return [
        { type: ErrorService, },
    ]; };
    return ErrorComponent;
}());
export { ErrorComponent };
