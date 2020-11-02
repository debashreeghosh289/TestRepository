import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Debashree1';
  constructor(private router:Router) { }

  goToProducts(){
    this.router.navigateByUrl( 'products');
    
 }
 goToOrders(){
  this.router.navigateByUrl( 'orders');
 }
 goToCustomers(){
  this.router.navigateByUrl( 'customer');
 }
}
