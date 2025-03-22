import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  imports: [],
  templateUrl: './child-to-parent.component.html',
  styleUrl: './child-to-parent.component.scss'
})
export class ChildToParentComponent {
    @Output() getUsers = new EventEmitter(); 
    users = ['rohan','kumawat','tannu']

    loaddata(){
      this.getUsers.emit(this.users)
    }
}
