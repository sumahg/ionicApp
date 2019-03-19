import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import StudentService from '../student.service';
import { Router } from '@angular/router';
var ListStudentComponent = /** @class */ (function () {
    function ListStudentComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.students = this.studentService.getStudents();
    }
    ListStudentComponent.prototype.ngOnInit = function () { };
    ListStudentComponent.prototype.deleteStudent = function (student) {
        this.studentService.deleteStudent(student);
    };
    ListStudentComponent.prototype.editStudent = function (student) {
        console.log("rollno" + student.rollno);
        this.router.navigate(['/edit-student/' + student.rollno]);
    };
    ListStudentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list.student',
            templateUrl: './list.student.component.html',
            styleUrls: ['./list.student.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StudentService, Router])
    ], ListStudentComponent);
    return ListStudentComponent;
}());
export { ListStudentComponent };
//# sourceMappingURL=list.student.component.js.map