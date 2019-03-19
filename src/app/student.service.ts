import { Injectable } from '@angular/core';
import { SummaryResolver } from '@angular/compiler';
import { splitMatchedQueriesDsl } from '@angular/core/src/view/util';
import { matches } from '@ionic/core/dist/types/components/nav/view-controller';

@Injectable({
  providedIn: 'root'
})
export default class StudentService {
  students = [];
  constructor() {}
   setLocalStorageStudents(list){
     localStorage.setItem('students', JSON.stringify(list));
   }

   getStudents() {
     if(this.students.length == 0){
       this.students = [
  {rollno: 1, firstName:'Suma',lastName:'madhu', dob : '03/16/2019', class: 1, subjects: 'maths', teacher:'Vivek', address:'Bangalore'},
  {rollno: 2,firstName: 'Yuktha',lastName:'madhu', dob : '03/16/2019', class: 1, subject: 'maths', teacher:'Vivek', address:'Bangalore'}
      ];
      this.setLocalStorageStudents(this.students);
     }else{
      this.students = JSON.parse(localStorage.getItem('students'));
     }
     return this.students;
   }

   getStudentByRollno(rollno){
    for(var i = 0; i < this.students.length; i++){
      if(rollno == this.students[i].rollno){
        return this.students[i];
      }
    }
    return null;
   }

   updateStudent(student){
     for (var i = 0; i < this.students.length; i++){
         if(student.rollno == this.students[i].rollno){
            this.students[i] = student;
         }
         this.setLocalStorageStudents(this.students);
     }
   }

   addStudent(student){
     if(student.rollno == 0){
      student.rollno = Math.round(Math.random()*100);
     }
      this.students.push(student);
      this.setLocalStorageStudents(this.students);
   }

   deleteStudent(student){
     for(var i =0; i < this.students.length; i++){
       if(student.rollno == this.students[i].rollno){
          this.students.splice(i,1);
          this.setLocalStorageStudents(this.students);
       }
     }
   }
}
