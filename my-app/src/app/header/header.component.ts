import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
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
  public imagePosition: string;
  public imageUrl: string;
  @ViewChild("main") main!: ElementRef<HTMLDivElement>;

  /*@Output() scrollToEvent = new EventEmitter<Event>();*/

  constructor() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.dropDown = false;
    this.imageUrl = this.calculateImageUrl();
    this.imagePosition = this.calculateImagePosition();
    /*this.main.nativeElement.clientHeight*/
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth > 1100)
      this.dropDown = false;

    this.imageUrl = this.calculateImageUrl();
    this.imagePosition = this.calculateImagePosition();
  }

  dropdownClick(event: Event) {
    this.dropDown = !this.dropDown;
  }

  scrollTo(event: Event) {
    document.getElementsByTagName((event.target as HTMLDivElement).id)[0].scrollIntoView();
  }

  calculateImagePosition() {
    if (this.screenWidth <= 800)
      return 'right';
    return (this.screenWidth / 2 - 161).toString() + 'px';
  }

  calculateImageUrl() {
    if (this.screenWidth <= 800 && this.screenWidth > 480)
      return 'url(/assets/images/header-image1.png)';
    if (this.screenWidth <= 480)
      return 'url(/assets/images/header-image2.png)';
    return 'url(/assets/images/header-image.png)';
  }
}
