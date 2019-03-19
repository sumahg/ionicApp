import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var StudentService = /** @class */ (function () {
    function StudentService() {
        this.students = [];
        var defaultStudents = [
            { rollno: 1, firstName: 'Suma', lastName: 'madhu', dob: '03/16/2019', class: 1, subjects: 'maths', teacher: 'Vivek', address: 'Bangalore' },
            { rollno: 2, firstName: 'Yuktha', lastName: 'madhu', dob: '03/16/2019', class: 1, subject: 'maths', teacher: 'Vivek', address: 'Bangalore' }
        ];
        if (JSON.parse(localStorage.getItem('students')) == []) {
            this.students = defaultStudents;
            this.setLocalStorageStudents(this.students);
        }
        else {
            this.getLocalStorageStudents();
        }
    }
    StudentService.prototype.getLocalStorageStudents = function () {
        this.students = JSON.parse(localStorage.getItem('students'));
    };
    StudentService.prototype.setLocalStorageStudents = function (list) {
        localStorage.setItem('students', JSON.stringify(list));
    };
    StudentService.prototype.getStudents = function () {
        return this.students;
    };
    StudentService.prototype.getStudentByRollno = function (rollno) {
        for (var i = 0; i < this.students.length; i++) {
            if (rollno == this.students[i].rollno) {
                return this.students[i];
            }
        }
        return null;
    };
    StudentService.prototype.updateStudent = function (student) {
        for (var i = 0; i < this.students.length; i++) {
            if (student.rollno == this.students[i].rollno) {
                this.students[i] = student;
            }
            this.setLocalStorageStudents(this.students);
        }
    };
    StudentService.prototype.addStudent = function (student) {
        if (student.rollno == 0) {
            student.rollno = Math.round(Math.random() * 100);
        }
        this.students.push(student);
        this.setLocalStorageStudents(this.students);
    };
    StudentService.prototype.deleteStudent = function (student) {
        for (var i = 0; i < this.students.length; i++) {
            if (student.rollno == this.students[i].rollno) {
                this.students.splice(i, 1);
                this.setLocalStorageStudents(this.students);
            }
        }
    };
    StudentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StudentService);
    return StudentService;
}());
export default StudentService;
//# sourceMappingURL=student.service.js.map