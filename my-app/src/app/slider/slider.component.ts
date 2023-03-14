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
  
  ngOnInit(): void {
    //setInterval(() => {console.log("interval")}, 3000);
    //throw new Error('Method not implemented.');
  }

  selectImage(index: number) {
    this.selectedImage = index;
  }
  onResized(event: ResizedEvent) {
    let height = event.newRect.height / 10;
    this.dotsContainer.nativeElement.style.bottom = height.toString() + "px";
  }
}
