import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  //directives are the features in angular that help you to provide more power to DOM elements
  // it gives the additional behavior to html elements
  // we must need to import these directives
  // ngIf, ngElse, ngFor, ngStyle, ngSwitch, ngClass

  //1. Component Directives:- @Component is the component directive
  //2. Structural Directives:- ngIf, ngFor, ngSwitch
  //3. Attribute Directives:- ngClass, ngStyle

  show = false;
  isDisplay = false;
  users = ['Rohan', 'Harshita', 'Parul', 'Raj']
  students = [
    {id:crypto.randomUUID(),name:'rohan'},
    {id:crypto.randomUUID(),name:'parul'},
    {id:crypto.randomUUID(),name:'harshita'}
  ]

  login = false;

  color = 'red'
  changeColor(e:string){
    
    this.color = e
  }

}
