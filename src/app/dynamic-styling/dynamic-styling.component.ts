import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.component.html',
  styleUrl: './dynamic-styling.component.scss'
})
export class DynamicStylingComponent {
  bgColor = 'red'
  fontSize = '30'
  isDynamic = false;

  dynamicStyle(){
    this.isDynamic = !this.isDynamic
  }
}
