import { Component } from '@angular/core';

@Component({
  selector: 'app-getsetinputfiieldvalue',
  imports: [],
  templateUrl: './getsetinputfiieldvalue.component.html',
  styleUrl: './getsetinputfiieldvalue.component.scss'
})
export class GetsetinputfiieldvalueComponent {
  name:any = ""
  displayName:any = ""
  getInput(event:Event){
    
    const name = (event.target as HTMLInputElement).value
    this.name = name
  }

  getValue(e:string){
    this.name = e;
  }
}
