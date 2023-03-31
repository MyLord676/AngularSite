import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})

export class AdvantagesComponent {
  @ViewChild("image")image!: ElementRef<HTMLDivElement>;
  zero = 0;
  bottom = "no-repeat";
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
    this.wrapperWidth = event.newRect.width;
    this.wrapperHeight = event.newRect.height;
  }
}
