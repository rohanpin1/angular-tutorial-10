import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effecttutorial',
  imports: [],
  templateUrl: './effecttutorial.component.html',
  styleUrl: './effecttutorial.component.scss'
})
export class EffecttutorialComponent {
  username = signal('Rohan')
  displayUsername = true;

  // effect always works with constructor
  constructor(){
    effect(()=>{
      console.log(this.username())
    })
  }

  displayUsernameValue(){
    
    this.displayUsername = !this.displayUsername;
  }
}
