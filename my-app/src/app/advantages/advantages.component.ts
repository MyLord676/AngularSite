import { Component, ElementRef, ViewChild } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})

export class AdvantagesComponent {
  @ViewChild("text")text!: ElementRef<HTMLDivElement>;
  @ViewChild("image")image!: ElementRef<HTMLImageElement>;
  @ViewChild("content")content!: ElementRef<HTMLDivElement>;
  onResized(event: ResizedEvent) {
    //this.text.nativeElement.style.height = event.newRect.height + "px";
    //this.content.nativeElement.style.height = event.newRect.height + "px";
    this.text.nativeElement.style.bottom = (event.newRect.height * 89 / 100) + "px";
    //this.text.nativeElement.style.left = (event.newRect.width * 1 / 100) + "px";
    //this.dotsContainer.nativeElement.style.bottom = (event.newRect.height / 10).toString() + "px";
    //this.controlsContainer.nativeElement.style.bottom = (event.newRect.height / 2).toString() + "px";
  }

}
