import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  imports: [],
  templateUrl: './parent-to-child.component.html',
  styleUrl: './parent-to-child.component.scss'
})
export class ParentToChildComponent {
  @Input() user:string = ''
  @Input() city:string = ''  //we use the input() decorator to access the value from parent to child component
  @Input() userName:string = ''
}
