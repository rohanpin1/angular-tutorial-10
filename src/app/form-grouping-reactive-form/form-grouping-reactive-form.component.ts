import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-grouping-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form-grouping-reactive-form.component.html',
  styleUrl: './form-grouping-reactive-form.component.scss'
})
export class FormGroupingReactiveFormComponent {
  //organization and readability, validationa and error handling, accessing group values 
  name = ''
  password = ''
  email = ''
  isShow = false
  profileForm = new FormGroup({
    name:new FormControl(),
    password:new FormControl(),
    email:new FormControl()
  })

  onSubmit(){
    console.log(this.profileForm.value);
    console.log(this.profileForm.value.email);
    console.log(this.profileForm.value.name);
    console.log(this.profileForm.value.password);
    this.isShow = true;
    this.name = this.profileForm.value.name
    this.email = this.profileForm.value.email
    this.password = this.profileForm.value.password
  }

  setValue(){
    this.profileForm.setValue({
      name:'rohan',
      password:'rohan@1234',
      email:'rohan@1234gmail.com'
    })
  }
}
