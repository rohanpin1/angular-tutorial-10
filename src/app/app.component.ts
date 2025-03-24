import { afterNextRender, afterRender, Component, ViewChild, viewChild } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DatatableComponent } from "./feature/datatable.component"; // ✅ Import NgFor

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CounterComponent } from './counter/counter.component';
import { GetsetinputfiieldvalueComponent } from './getsetinputfiieldvalue/getsetinputfiieldvalue.component';
import { ControlflowComponent } from './controlflow/controlflow.component';
import { ElseifcontrolComponent } from './elseifcontrol/elseifcontrol.component';
import { SwitchcontrolComponent } from './switchcontrol/switchcontrol.component';
import { ForloopcontrolComponent } from './forloopcontrol/forloopcontrol.component';
import { SignalsComponent } from './signals/signals.component';
import { SignalsdatatypesComponent } from './signalsdatatypes/signalsdatatypes.component';
import { ComputedComponent } from './computed/computed.component';
import { EffecttutorialComponent } from './effecttutorial/effecttutorial.component';
import { ForloopcontextialComponent } from './forloopcontextial/forloopcontextial.component';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DynamicStylingComponent } from './dynamic-styling/dynamic-styling.component';
import { DirectivesComponent } from './directives/directives.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { CurrencyConverterPipe } from './custom-pipes/currency-converter.pipe';
import { UserLifeCycleComponent } from './user-life-cycle/user-life-cycle.component';
import { ProductService } from './services/product.service';
import { ApiCallService } from './services/api-call.service';
import { Products } from './interface/product';


@Component({
  selector: 'app-root',
  imports: [NgFor,NgIf, DatatableComponent, LoginComponent, SignupComponent
    , ProfileComponent, CounterComponent, GetsetinputfiieldvalueComponent, ControlflowComponent,
  ElseifcontrolComponent, SwitchcontrolComponent, ForloopcontrolComponent, SignalsComponent, SignalsdatatypesComponent
, ComputedComponent, EffecttutorialComponent, ForloopcontextialComponent, TwowaybindComponent,TodolistComponent,
DynamicStylingComponent, DirectivesComponent, RouterOutlet, 
HeaderComponent, TemperatureComponent,ParentToChildComponent, ChildToParentComponent,PipesComponent
,CurrencyConverterPipe, UserLifeCycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form';
  method = 'www.google.com';
  item = [{link : "https://rrohankumawat.github.io/portfolio"}, {link : "https://rrohankumawat.github.io/portfolio"},
    {link : "https://rrohankumawat.github.io/portfolio"},{link : "https://rrohankumawat.github.io/portfolio"}
  ];
  formHeader = 'Registration form';
  userName ='Rohan Kumawat'
  userNames = ['rohan','raj','sohel','rajveer','pankaj']
  selectedUser(name:string){
    this.userName = name
  }
  users:string[]|undefined  

  handleUsers(users:string[]){
    console.log(users)
    this.users = users
  }

  amount = 10
  count = 0
  updateCounter(){
    this.count ++;
  }

  @ViewChild('user') UserLifeCycleComponent:any

  constructor(private productService:ProductService, private apiService:ApiCallService, private route:Router){
    afterRender(()=>{
      console.log("afterRender",this.UserLifeCycleComponent.count)
    })

    afterNextRender(()=>{  //called once only
      
        console.log("back again")
      
    })

   
  }

  product:{
    name: string;
    brand: string;
    price: string;
}[] | undefined

  getProductData(){
    this.product= this.productService.getProductData()
    console.log(this.product);
    
  }

  // productList:{
  //   id:string,
  //   name:string,
  //   description:string,
  //   price:string,
  //   category:string,
  //   stock:string,
  //   rating:string
  // }[] | undefined

  productList:any

  
  getProductss(){
    this.apiService.getProducts().subscribe((x:any)=>{
      this.productList = x
      console.log(this.productList)
    })
  }
  deleteRow(id:string){
    this.apiService.deleteProducts(id).subscribe((x:any)=>{
      if(x == '1'){
        this.getProductss()
      }
    })
  }

  myProduct:string | undefined;
  selectUpdateRow(id:string){
    console.log(id)
    this.apiService.getSelectedUser(id).subscribe((x:Products)=>{
      console.log(x)
      this.myProduct = JSON.stringify(x)

      this.route.navigate(['productform/'+this.myProduct])
    })
  }
}


