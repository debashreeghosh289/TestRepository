import { Component, OnInit } from '@angular/core';
import {CustomerService } from '../shared/customer_service/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private _customerService:CustomerService,
              ) { }

  customerList=[];
  customer ={
    "customer_id":'' ,
    "name":'',
    "dob":'',
    "address":''
  };
  ngOnInit() {
    this.getCustomers();
  }

  private getCustomers(){
    this._customerService.getCustomers()
   .subscribe((customer:any)=>{
     this.customerList = customer;
     console.log(this.customerList);
   });  
 }

 private addAddress(customer:any){
   console.log(customer);
   this.customerList.push(customer);
   console.log(this.customerList);
   this.validateCustomer(customer);

 }

 private validateCustomer(customer:any){
   if(customer.name==null){
     // this._toasterService.error("Please Enter Customer Name!!!!");
   }
 }
}
