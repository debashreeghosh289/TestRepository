import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private _router:Router,
    private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params=> { 
      if(params.product)
        {
          console.log(params.product);
        }
    })
  }

}
