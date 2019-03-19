import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
	constructor() { 
    var defaultCustomers = [
      {id:1, name:'Suma', email:'suma@gmail.com', address:'Bangalore', phone:'8777777'},
      {id:2, name:'Yukta', email:'yuktha@gmail.com', address:'Bangalore', phone:'77777'}
      ];


      if(localStorage.getItem('customers') == null){
        this.customers = defaultCustomers;
        this.setLocalStorageCustomers(this.customers);
    }else{
      this.getLocalStorageCustomers();
    }

  }

customers = [];
getLocalStorageCustomers(){
  this.customers = JSON.parse(localStorage.getItem('customers'));
}
setLocalStorageCustomers(list){
  localStorage.setItem('customers', JSON.stringify(list));
}

  getCustomers(){
    
  	return this.customers;
  }
  	getCustomerById(id){
		for(var i = 0;i<this.customers.length;i++){
			if(id == this.customers[i].id){
				return this.customers[i];
			}
		}
		return null;
	}

  updateCustomer(customer){
    for(var i = 0;i<this.customers.length;i++){
    	if(customer.id == this.customers[i].id){
    		this.customers[i] = customer;
    	}
      this.setLocalStorageCustomers(this.customers);
    }
}

  addCustomer(customer){
  	customer.id = Math.round(Math.random()*100000);
    	this.customers.push(customer);
      this.setLocalStorageCustomers(this.customers);

  }

   deleteCustomer(customer){
    for(var i = 0;i<this.customers.length;i++){
      if(customer.id == this.customers[i].id){
        this.customers.splice(i,1);
        this.setLocalStorageCustomers(this.customers);
      }
    }

  }
}

