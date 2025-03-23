import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-life-cycle',
  imports: [],
  templateUrl: './user-life-cycle.component.html',
  styleUrl: './user-life-cycle.component.scss'
})
export class UserLifeCycleComponent {
  name = "rohan"
  @Input() count : number = 0
  constructor(){
    console.log("constructor")
    this.name = 'rohit'
  }

  ngOnInit(){
    console.log("ngOnItin")
    this.name = 'sam'
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
    
  }

  ngOnChange(){
    //it will call when the value is sending from parent to child or child to parent
    console.log("ngOnChange");
    
  }
}
