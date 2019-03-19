import { Component, OnInit } from '@angular/core';
import StudentService from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add.student',
  templateUrl: './add.student.component.html',
  styleUrls: ['./add.student.component.scss'],
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService:StudentService, private router: Router) { }
   student = {rollno: 0,firstName: '',lastName:'', dob : '', class: 1, subjects: 'm', teacher:'', address:''}
  ngOnInit() {}
  addStudent(student){
     this.studentService.addStudent(student);
     this.router.navigate(['/list-student']);
  }

}
