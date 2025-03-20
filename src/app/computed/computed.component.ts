import { Component, signal , computed} from '@angular/core';

@Component({
  selector: 'app-computed',
  imports: [],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.scss'
})
export class ComputedComponent {
  x  = 10
  y = 20
  z = this.x + this.y

  p = signal(10)
  q = signal(20)
 r = computed(() => this.p() + this.q()); // ✅ Correct usage
  show(){
    console.log(this.z)
    this.x = 100
    console.log(this.z)   // this will return 30

    console.log('computed initital',this.r())
    this.q.set(100)
    console.log('computed after change', this.r())
  }
}
