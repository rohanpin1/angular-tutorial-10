import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflow',
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.scss'
})
export class ControlflowComponent {
  isDisplay = false;

  show(){
    this.isDisplay = true;
  }

  hide(){
    this.isDisplay = false;
  }

  toggleDiv(){
    this.isDisplay = !this.isDisplay
  }
}
