import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-basic',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-basic.component.html',
  styleUrl: './reactive-form-basic.component.scss'
})
export class ReactiveFormBasicComponent {

  name = new FormControl('admin');
  password = new FormControl('admin@123');
  displayValue(){
      console.log(this.name.value)
      console.log(this.password.value)
  }
  setValue(){
    this.name.setValue('Rohan')
    this.password.setValue('Rohan@123')
  }
}
