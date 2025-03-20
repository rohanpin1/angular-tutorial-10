import { Component } from '@angular/core';

@Component({
  selector: 'app-switchcontrol',
  imports: [],
  templateUrl: './switchcontrol.component.html',
  styleUrl: './switchcontrol.component.scss'
})
export class SwitchcontrolComponent {
  color:number = 1

  red(){
    this.color = 1;
  }

  blue(){
    this.color = 2;
  }

  yellow(){
    this.color = 4;
  }

  green(){
    this.color = 3;
  }
}
