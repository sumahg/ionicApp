import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';
var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.customer = { id: 0, name: '', email: '', address: '', phone: '' };
    }
    AddCustomerComponent.prototype.ngOnInit = function () { };
    AddCustomerComponent.prototype.addCustomer = function (customer) {
        this.customerService.addCustomer(customer);
        customer = this.customerService.getCustomers();
        this.router.navigate(['/list-customer']);
    };
    AddCustomerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add.customer',
            templateUrl: './add.customer.component.html',
            styleUrls: ['./add.customer.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CustomerService, Router])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());
export { AddCustomerComponent };
//# sourceMappingURL=add.customer.component.js.map