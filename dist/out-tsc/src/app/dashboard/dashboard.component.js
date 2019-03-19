import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    DashboardComponent.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    DashboardComponent.prototype.openEnd = function () {
        this.menu.open('end');
    };
    DashboardComponent.prototype.openCustom = function () {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, MenuController])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map