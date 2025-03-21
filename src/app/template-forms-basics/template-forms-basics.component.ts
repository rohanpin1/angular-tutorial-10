import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms-basics',
  imports: [FormsModule,NgIf],
  templateUrl: './template-forms-basics.component.html',
  styleUrl: './template-forms-basics.component.scss'
})
export class TemplateFormsBasicsComponent {
  addDetails(val:NgForm){
    console.log(val);
    
  }
}
