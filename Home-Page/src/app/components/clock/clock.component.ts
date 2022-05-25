import { Component, ElementRef, NgZone, Renderer2, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  
  now: number = Date.now();
  @ViewChild('clock')
  public element: ElementRef = new ElementRef('p');

  constructor() { 
    setInterval(()=>{
      this.now = Date.now();
    })
  }

}
