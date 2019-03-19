import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var StudentComponent = /** @class */ (function () {
    function StudentComponent(router) {
        this.router = router;
        this.items = [];
        this.items.push({
            title: 'List',
            note: '/list-student',
            icon: 'people'
        });
        this.items.push({
            title: 'Add',
            note: '/add-student',
            icon: 'person-add'
        });
    }
    StudentComponent.prototype.openUrl = function (item) {
        this.router.navigate([item.note]);
    };
    StudentComponent.prototype.ngOnInit = function () { };
    StudentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-student',
            templateUrl: './student.component.html',
            styleUrls: ['./student.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], StudentComponent);
    return StudentComponent;
}());
export { StudentComponent };
//# sourceMappingURL=student.component.js.map