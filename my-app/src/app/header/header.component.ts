import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public dropDown: boolean;
  public screenWidth: number;
  public screenHeight: number;
  @ViewChild("main")main!: ElementRef<HTMLDivElement>;

  constructor() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.dropDown = false;
    /*this.main.nativeElement.clientHeight*/
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth > 1100)
      this.dropDown = false;
  }

  dropdownClick(event: Event) {
    this.dropDown = !this.dropDown;
    if (this.screenWidth > 1100)
      this.dropDown = false;
  }
}
