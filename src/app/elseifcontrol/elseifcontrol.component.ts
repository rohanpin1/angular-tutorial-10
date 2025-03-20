import { Component } from '@angular/core';

@Component({
  selector: 'app-elseifcontrol',
  imports: [],
  templateUrl: './elseifcontrol.component.html',
  styleUrl: './elseifcontrol.component.scss'
})
export class ElseifcontrolComponent {
  color:number = 0

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
