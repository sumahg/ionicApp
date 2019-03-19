import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  private selectedItem: any;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router: Router) {
  	this.items.push({
  		title: 'List',
        note:'/list-customer',
        icon: 'people'
  	});
  	this.items.push({
  		title: 'Add',
  		note:'/add-customer',
      icon: 'person-add'
  	});
  }
  openUrl(item){
    this.router.navigate([item.note]);
  }

  ngOnInit() {}
}
