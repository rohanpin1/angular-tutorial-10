import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  id:string | null = ''
  name:string|null= ''
  constructor(private route:ActivatedRoute){

  }

  ngOnInit(){
    this.route.params.subscribe(paramas =>{
      console.log(paramas)
      this.id = paramas['id']
      this.name = paramas['name']
    })


    
  }
}
