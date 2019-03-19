import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import StudentService from '../student.service';
import { Router } from '@angular/router';
var EditStudentComponent = /** @class */ (function () {
    function EditStudentComponent(route, studentService, router) {
        this.route = route;
        this.studentService = studentService;
        this.router = router;
    }
    EditStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.rollno = +params['rollno']; // (+) converts string 'id' to a number
            console.log("rollno is " + _this.rollno);
            _this.student = _this.studentService.getStudentByRollno(_this.rollno);
            // In a real app: dispatch action to load the details here.
        });
    };
    EditStudentComponent.prototype.updateStudent = function (student) {
        this.studentService.updateStudent(student);
        student = { rollno: 0, firstName: '', lastName: '', dob: '', class: 1, subjects: 'm', teacher: '', address: '' };
        this.router.navigate(['/list-student']);
    };
    EditStudentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edit.student',
            templateUrl: './edit.student.component.html',
            styleUrls: ['./edit.student.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, StudentService, Router])
    ], EditStudentComponent);
    return EditStudentComponent;
}());
export { EditStudentComponent };
//# sourceMappingURL=edit.student.component.js.map