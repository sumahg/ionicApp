import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.customers = [];
        var defaultCustomers = [
            { id: 1, name: 'Suma', email: 'suma@gmail.com', address: 'Bangalore', phone: '8777777' },
            { id: 2, name: 'Yukta', email: 'yuktha@gmail.com', address: 'Bangalore', phone: '77777' }
        ];
        if (localStorage.getItem('customers') == null) {
            this.customers = defaultCustomers;
            this.setLocalStorageCustomers(this.customers);
        }
        else {
            this.getLocalStorageCustomers();
        }
    }
    CustomerService.prototype.getLocalStorageCustomers = function () {
        this.customers = JSON.parse(localStorage.getItem('customers'));
    };
    CustomerService.prototype.setLocalStorageCustomers = function (list) {
        localStorage.setItem('customers', JSON.stringify(list));
    };
    CustomerService.prototype.getCustomers = function () {
        return this.customers;
    };
    CustomerService.prototype.getCustomerById = function (id) {
        for (var i = 0; i < this.customers.length; i++) {
            if (id == this.customers[i].id) {
                return this.customers[i];
            }
        }
        return null;
    };
    CustomerService.prototype.updateCustomer = function (customer) {
        for (var i = 0; i < this.customers.length; i++) {
            if (customer.id == this.customers[i].id) {
                this.customers[i] = customer;
            }
            this.setLocalStorageCustomers(this.customers);
        }
    };
    CustomerService.prototype.addCustomer = function (customer) {
        customer.id = Math.round(Math.random() * 100000);
        this.customers.push(customer);
        this.setLocalStorageCustomers(this.customers);
    };
    CustomerService.prototype.deleteCustomer = function (customer) {
        for (var i = 0; i < this.customers.length; i++) {
            if (customer.id == this.customers[i].id) {
                this.customers.splice(i, 1);
                this.setLocalStorageCustomers(this.customers);
            }
        }
    };
    CustomerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());
export default CustomerService;
//# sourceMappingURL=customer.service.js.map