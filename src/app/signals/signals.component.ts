import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  //signals are wrapper around a value
  // that gives the signals when value changed
// it contains any type of values 
  count = signal(10)
  x = 20;
  constructor(){
    effect(()=>{
      console.log(this.count())
    })
  }
  increase(){
    this.count.set(this.count()+1)   //set is used to set the new value in signal
  }
}
