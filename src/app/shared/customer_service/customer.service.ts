import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url='http://localhost:3000/customers';
  constructor(private http: HttpClient) { }

  getCustomers():Observable<Object>{
    return this.http.get(this.url);
  }
}
