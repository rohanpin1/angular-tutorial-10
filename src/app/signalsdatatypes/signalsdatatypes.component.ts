import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signalsdatatypes',
  imports: [],
  templateUrl: './signalsdatatypes.component.html',
  styleUrl: './signalsdatatypes.component.scss'
})
export class SignalsdatatypesComponent {
  // data = signal<number | string>(10)

  data : WritableSignal<number | string> = signal(10)   // writable signals
  count : Signal<number> = computed(() => 200)    // computed signals, this is readyonly, can't update its value
  datanumber : WritableSignal<number> = signal(100)

  updatesignal(){
    this.data.set("Hello")
    this.datanumber.update((x)=> x + 1)  // we must use update() with number data type
  }
}
