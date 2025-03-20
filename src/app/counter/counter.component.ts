import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
    count:number = 0;

    increase(){
      this.count = this.count + 1;
    }
    decrease(){
      this.count = this.count - 1;
    }

    reset(){
      this.count = 0;
    }
}
