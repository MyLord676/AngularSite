import { Component, HostListener } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public screenWidth: number;
  public screenHeight: number;

  public wrapperWidth: number;
  public wrapperHeight: number;

  constructor() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.wrapperWidth = window.innerWidth;
    this.wrapperHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  onResized(event: ResizedEvent) {
    this.wrapperWidth = event.newRect.height;
    this.wrapperHeight = event.newRect.height;
  }
}
