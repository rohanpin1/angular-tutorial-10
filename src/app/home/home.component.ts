import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormBasicComponent } from '../reactive-form-basic/reactive-form-basic.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ReactiveFormBasicComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  users=[
    {id:crypto.randomUUID(),name:'rohan',age:'24',email:'rohan@gmail.com'},
    {id:crypto.randomUUID(),name:'aryan',age:'24',email:'aryan@gmail.com'},
    {id:crypto.randomUUID(),name:'anil',age:'24',email:'anil@gmail.com'},
  ]
  constructor(private router:Router){

  }
  goToProfile(){
    this.router.navigate(['profiles'],{queryParams:{college:'SBCET Jaipur',city:'jaipur'}})
  }
}
