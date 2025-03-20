import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  task = ""
  taskList : {id : string,name : string }[] = []

  addTask(){
    this.taskList.push({id : crypto.randomUUID(), name : this.task})
  }
}
