import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(router) {
        this.router = router;
        this.items = [];
        this.items.push({
            title: 'List',
            note: '/list-customer',
            icon: 'people'
        });
        this.items.push({
            title: 'Add',
            note: '/add-customer',
            icon: 'person-add'
        });
    }
    CustomerComponent.prototype.openUrl = function (item) {
        this.router.navigate([item.note]);
    };
    CustomerComponent.prototype.ngOnInit = function () { };
    CustomerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-customer',
            templateUrl: './customer.component.html',
            styleUrls: ['./customer.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], CustomerComponent);
    return CustomerComponent;
}());
export { CustomerComponent };
//# sourceMappingURL=customer.component.js.map