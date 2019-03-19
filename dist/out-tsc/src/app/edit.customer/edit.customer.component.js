import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';
var EditCustomerComponent = /** @class */ (function () {
    function EditCustomerComponent(route, customerService, router) {
        this.route = route;
        this.customerService = customerService;
        this.router = router;
    }
    EditCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            console.log("id is " + _this.id);
            _this.customer = _this.customerService.getCustomerById(_this.id);
            // In a real app: dispatch action to load the details here.
        });
    };
    EditCustomerComponent.prototype.updateCustomer = function (customer) {
        this.customerService.updateCustomer(customer);
        customer = { id: '', name: '', email: '', address: '', phone: '' };
        this.router.navigate(['/list-customer']);
    };
    EditCustomerComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit.customer',
            templateUrl: './edit.customer.component.html',
            styleUrls: ['./edit.customer.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CustomerService, Router])
    ], EditCustomerComponent);
    return EditCustomerComponent;
}());
export { EditCustomerComponent };
//# sourceMappingURL=edit.customer.component.js.map