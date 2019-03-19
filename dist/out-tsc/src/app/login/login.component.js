import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(alertController, router) {
        this.alertController = alertController;
        this.router = router;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLogin = function () {
        if (this.username == this.password) {
            this.router.navigate(['/dashboard']);
        }
        else {
            this.presentAlert();
            this.username = '';
            this.password = '';
        }
    };
    LoginComponent.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Login Failed',
                            subHeader: 'Invalid Username/Password',
                            message: 'Please check your username or password.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map