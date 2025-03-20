import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  imports: [FormsModule],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.scss'
})
export class TemperatureComponent {
  c = 0
  f = 32
  getC(e:Event){
    debugger
    this.c =parseFloat(((this.f - 32)*5/9).toFixed(1))
  }
  getF(e:Event){
    
    this.f = parseFloat(((this.c * 9 / 5) + 32).toFixed(1))
  }
}
