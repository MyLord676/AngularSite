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

  public imagePosition: string;
  public imageUrl: string;

  constructor() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.wrapperWidth = window.innerWidth;
    this.wrapperHeight = window.innerHeight;

    this.imageUrl = this.calculateImageUrl();
    this.imagePosition = this.calculateImagePosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.imageUrl = this.calculateImageUrl();
    this.imagePosition = this.calculateImagePosition();
  }

  onResized(event: ResizedEvent) {
    this.wrapperWidth = event.newRect.height;
    this.wrapperHeight = event.newRect.height;
  }

  calculateImagePosition() {
    if (this.screenWidth <= 800 && this.screenWidth > 480)
      return 'right 40px';
    if (this.screenWidth <= 480)
      return 'right 120px';
    return (this.screenWidth / 2).toString() + 'px' + ' top';
  }

  calculateImageUrl() {
    if (this.screenWidth <= 800 && this.screenWidth > 480)
      return 'url(/assets/images/footer1.png)';
    if (this.screenWidth <= 480)
      return 'url(/assets/images/footer2.png)';
    return 'url(/assets/images/footer.png)';
  }
}
