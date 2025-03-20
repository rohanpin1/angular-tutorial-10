import { Component } from '@angular/core';

@Component({
  selector: 'app-forloopcontrol',
  imports: [],
  templateUrl: './forloopcontrol.component.html',
  styleUrl: './forloopcontrol.component.scss'
})
export class ForloopcontrolComponent {
  users = ["Rohan", "Harshita", "Parul", "Rajendra", "Anita"]
  students = [
    {name : 'rohan', email : 'rohan@gmail.com'},
    {name : 'parul', email : 'parul@gmail.com'},
    {name : 'harshita', email : 'harshita@gmail.com'},
  ]
}
