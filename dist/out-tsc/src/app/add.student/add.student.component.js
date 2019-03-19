import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import StudentService from '../student.service';
import { Router } from '@angular/router';
var AddStudentComponent = /** @class */ (function () {
    function AddStudentComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.student = { rollno: 0, firstName: '', lastName: '', dob: '', class: 1, subjects: 'm', teacher: '', address: '' };
    }
    AddStudentComponent.prototype.ngOnInit = function () { };
    AddStudentComponent.prototype.addStudent = function (student) {
        this.studentService.addStudent(student);
        this.router.navigate(['/list-student']);
    };
    AddStudentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add.student',
            templateUrl: './add.student.component.html',
            styleUrls: ['./add.student.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StudentService, Router])
    ], AddStudentComponent);
    return AddStudentComponent;
}());
export { AddStudentComponent };
//# sourceMappingURL=add.student.component.js.map