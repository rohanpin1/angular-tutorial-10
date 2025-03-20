import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybind',
  imports: [FormsModule],
  templateUrl: './twowaybind.component.html',
  styleUrl: './twowaybind.component.scss'
})
export class TwowaybindComponent {
      //to establish the sync between html and ts files, we use two way binding
      name = ''

      updateNmae(e:Event){
        this.name = (e.target as HTMLInputElement).value
      }
}
