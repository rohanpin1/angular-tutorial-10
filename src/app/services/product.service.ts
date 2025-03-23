import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { 
    console.log("product services")

  }

  getProductData(){
    return [
      {name:'mobile', brand:'samsung',price:'80k'},
      {name:'laptop', brand:'hp',price:'100k'},
    ]
  }
}
