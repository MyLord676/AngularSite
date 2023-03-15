import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-circle-slider',
  templateUrl: './circle-slider.component.html',
  styleUrls: ['./circle-slider.component.css']
})
export class CircleSliderComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() dots = true;
  @Input() controls = true;
  selectedImage = 0;
  @ViewChild("circledotsContainer")dotsContainer!: ElementRef<HTMLDivElement>;
  @ViewChild("circlecontrols")controlsContainer!: ElementRef<HTMLDivElement>;
  ngOnInit(): void {
    //setInterval(() => {console.log("interval")}, 3000);
    //throw new Error('Method not implemented.');
    //console.log(this.images, this.dots, this.controls, this.dotsContainer, this.controlsContainer);
  }
  onResized(event: ResizedEvent) {
    //console.log(this.dotsContainer, this.controlsContainer);
  }
}
