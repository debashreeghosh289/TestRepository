import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url='http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getProducts():Observable<Object>{
    return this.http.get(this.url);
    
  }
}
