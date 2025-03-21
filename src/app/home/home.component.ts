import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router:Router){

  }
  goToProfile(){
    this.router.navigate(['profiles'],{queryParams:{college:'SBCET Jaipur',city:'jaipur'}})
  }
}
