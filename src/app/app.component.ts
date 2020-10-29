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
    //this.router.navigateByUrl('/products');
    console.log("Hello");
    this.router.navigateByUrl( 'products');
    
 }
}
