import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { OrderService } from '../shared/order_service/order.service';
import { ProductService } from '../shared/product_service/product.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
   
  constructor(private _router:Router,
              private _route:ActivatedRoute,
              private _orderService:OrderService,
              private _productService:ProductService) {
        

               }

  orderList=[];
  productList=[];
  qty :number=0;
  prod_id="";
  orderObj=[];
  productObj={};
  totalAmount=0;
 today = new Date().toISOString().slice(0, 10);
 proObj ={
   "order_id":'' ,
   "product_id":'',
   "product_name":'',
   "product_qty":0,
   "product_price":'',
   "order_date":'',
   "amount": 0
 };

  ngOnInit() {
    this.getOrders();
    this._route.params.subscribe(params=> { 
      if(params.product || params.qty)
        {
          this.qty=params.qty;
          this.prod_id=params.product;
        }
    })
  }

  private getOrders(){
     this._orderService.getOrders()
    .subscribe((order:any)=>{
      if(order!=null){
        this.orderList = order;
      }
      else{
        this.orderList=[];
      }
    });  
    this.getProducts();
  }

  private getProducts(){
    this._productService.getProducts()
    .subscribe((prod:any)=>{
      this.productList =prod;
      this.getData();
    });
  }

  private getData(){
    this.productList=this.productList.filter(prod=> prod.prod_id == this.prod_id) ;
    console.log(this.productList)
    this.productList.forEach(data=>{
      this.proObj.product_id = this.prod_id;
      this.proObj.product_name = data.name;
      this.proObj.product_qty = this.qty;
      this.proObj.product_price = data.price;
      this.proObj.order_date = this.today;
      this.proObj.amount = data.price * this.qty ;
    })
    this.totalAmount = this.proObj.amount;
    this.orderList.push(this.proObj);
  }

  private goToCustomer(){
    this._router.navigate( ['customer']);
  }
 
}
