import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  
  now: number = Date.now();

  constructor() { 
    setInterval(()=>{
      this.now = Date.now();
    })
  }

}
