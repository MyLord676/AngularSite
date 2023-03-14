import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() dots = true;
  @Input() controls = true;
  selectedImage = 0;
  @ViewChild("dotsContainer")dotsContainer!: ElementRef<HTMLDivElement>;
  @ViewChild("controls")controlsContainer!: ElementRef<HTMLDivElement>;
  
  ngOnInit(): void {
    //setInterval(() => {console.log("interval")}, 3000);
    //throw new Error('Method not implemented.');
  }

  selectImage(index: number) {
    this.selectedImage = index;
  }
  onResized(event: ResizedEvent) {
    this.dotsContainer.nativeElement.style.bottom = (event.newRect.height / 10).toString() + "px";
    this.controlsContainer.nativeElement.style.bottom = (event.newRect.height / 2).toString() + "px";
  }
}
