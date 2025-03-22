import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
    // to need to use pipes, we need to import CommonModule
    welcome='Rohan is awesome developer'
    dob = new Date()
    amount = 10
}
