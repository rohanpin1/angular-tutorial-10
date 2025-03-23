import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getProducts(){
    const url = 'https://localhost:44382/api/Home/GetProducts'

    return this.http.get(url)
  }
}
