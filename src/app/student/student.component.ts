import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  private selectedItem: any;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router: Router) {
  	this.items.push({
  		title: 'List',
        note:'/list-student',
        icon: 'people'
  	});
  	this.items.push({
  		title: 'Add',
  		note:'/add-student',
      icon: 'person-add'
  	});
  }
  openUrl(item){
    this.router.navigate([item.note]);
  }

  ngOnInit() {}

}
