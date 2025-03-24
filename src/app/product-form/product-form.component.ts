import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { Products } from '../interface/product';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  constructor(private apiCall:ApiCallService){

  }
  addProduct(val: any){
      console.log(val);
      this.apiCall.saveProducts(val).subscribe((data:any)=>{
        console.log(data);
        if(data == '1'){
          window.location.reload()
        }
      })

      
  }
}
