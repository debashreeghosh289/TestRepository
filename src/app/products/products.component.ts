import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  constructor(private _productService:ProductService,
              private router:Router
              ) { 
    
  }
  productList=[];
  
  ngOnInit() {
    this.getProduct();
  }

  private getProduct(){
    this._productService.getProducts()
    .subscribe((data:any)=>{
      console.log(data);
      this.productList = data;
    });
    
  }

  private goToOrders(productDetails:any){
    console.log(productDetails);
    this.router.navigate( ['orders',{"product":productDetails.prod_id}]);

  }
  

}
