import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';
var ListCustomerComponent = /** @class */ (function () {
    function ListCustomerComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.customers = this.customerService.getCustomers();
    }
    ListCustomerComponent.prototype.ngOnInit = function () { };
    ListCustomerComponent.prototype.deleteCustomer = function (customer) {
        this.customerService.deleteCustomer(customer);
        customer = this.customerService.getCustomers();
    };
    ListCustomerComponent.prototype.editCustomer = function (customer) {
        console.log("id" + customer.id);
        this.router.navigate(['/edit-customer/' + customer.id]);
    };
    ListCustomerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list.customer',
            templateUrl: './list.customer.component.html',
            styleUrls: ['./list.customer.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CustomerService, Router])
    ], ListCustomerComponent);
    return ListCustomerComponent;
}());
export { ListCustomerComponent };
//# sourceMappingURL=list.customer.component.js.map