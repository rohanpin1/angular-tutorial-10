import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { Products } from '../interface/product';
import { ApiCallService } from '../services/api-call.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  id:number = 0
  data:Products | undefined
  
  isUpdate :boolean = false
  constructor(private apiCall:ApiCallService, private route:ActivatedRoute,private router:Router){

  }

  addProduct(val: any){
    if(!this.isUpdate){
      console.log(val);
      this.apiCall.saveProducts(val).subscribe((data:any)=>{
        console.log(data);
        if(data == '1'){
          window.location.reload()
        }
      })  
    }
    else{
      this.apiCall.updateProduct(val).subscribe((x:any)=>{
        console.log(x);
        if(x == '1'){
          this.router.navigate(['productform'])
        }
      })  
    }
         
  }

  
  ngOnInit(){
    this.route.params.subscribe(params=>{ 

      if(params['data'] != null || params['data'] != undefined){
        this.isUpdate = true
      this.data = JSON.parse(params['data']) as Products
      }   
      

    })
  }
}
