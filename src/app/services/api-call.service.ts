import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  //we can call multiple apis in single service
  constructor(private http:HttpClient) { }
  callDotnetApi(){
    const url = 'https://localhost:7082/api/Home/GetProducts'

    return this.http.get(url)
  }

  getProducts():Observable<any>{
    const url = 'https://localhost:44382/api/Home/GetProducts'

    return this.http.get<any>(url)
  }


  saveProducts(product:any):Observable<any> {
    const url = 'https://localhost:44382/api/Home/AddProducts'
    console.log('product api:',product);
    
    return this.http.post(url,product)
  }

  deleteProducts(id:any):Observable<any>{
    const url = 'https://localhost:44382/api/Home/DeleteProducts'
    return this.http.delete<any>(url+"?id="+id)
  }

  getSelectedUser(id:string):Observable<Products>{
    return this.http.get<Products>('https://localhost:44382/api/Home/GetProductById?id='+id)
  }


  updateProduct(product:Products):Observable<any>{
    return this.http.put('https://localhost:44382/api/Home/UpdateProduct',product)
  }
}
