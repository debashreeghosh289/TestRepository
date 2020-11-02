import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url='http://localhost:3000/orders';
  constructor(private http: HttpClient) { }


  getOrders():Observable<Object>{
    return this.http.get(this.url);
  }
}
