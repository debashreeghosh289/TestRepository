import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ProductService } from '../shared/product_service/product.service';
import { CategoriesService } from '../shared/category_service/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  constructor(private _productService:ProductService,
              private _categoryService:CategoriesService,
              private _router:Router
              ) { 
    
  }
  quantity = [
    {id: 1, name: "One"},
    {id: 2, name: "Two"},
    {id: 3, name: "Three"},
    {id: 4, name: "Four"},
    {id: 5, name: "Five"}
  ];
  productList=[];
  filteredProductList=[];
  categoryList=[];
  
  ngOnInit() {
    this.getProduct();
  }

  private getProduct(){
    this._productService.getProducts()
    .subscribe((data:any)=>{
      this.productList = data; 
    });
    this.getCategories();
  }
  private getCategories(){
    this._categoryService.getCategories()
    .subscribe((data:any)=>{
      this.categoryList = data;
    });
  }

  private goToOrders(productDetails:any){
    this._router.navigate( ['orders',{"product":productDetails.prod_id,"qty":productDetails.qty}]);

  }

  selectCat(data){
    let selectProductList =[];
    this.filteredProductList = Object.assign(this.filteredProductList,this.productList);
    selectProductList=this.filteredProductList;
    if(data!="null"){
      this.productList=selectProductList.filter(prod=> prod.category_id == data);  
    }
    else
     this.productList;
    //
  }
  

}
