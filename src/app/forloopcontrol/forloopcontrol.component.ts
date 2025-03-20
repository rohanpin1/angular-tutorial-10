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
    {id : crypto.randomUUID(),name : 'rohan', email : 'rohan@gmail.com'},
    {id : crypto.randomUUID(),name : 'parul', email : 'parul@gmail.com'},
    {id : crypto.randomUUID(),name : 'harshita', email : 'harshita@gmail.com'},
  ]
}
