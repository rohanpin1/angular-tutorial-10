import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.scss'
})
export class ReactiveFormValidationComponent {
  profileForms = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email, Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]),
    password: new FormControl('',[Validators.minLength(8),Validators.maxLength(20),Validators.required])
  })

  formSubmit(){
    console.log(this.profileForms.value)
  }

  get name(){
    return this.profileForms.get('name')
  }
  get email(){
    return this.profileForms.get('email')
  }
  get password(){
    return this.profileForms.get('password')
  }
}
