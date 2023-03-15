import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-circle-slider',
  templateUrl: './circle-slider.component.html',
  styleUrls: ['./circle-slider.component.css']
})


export class CircleSliderComponent implements OnInit, AfterViewInit {
  @Input() images: string[] = [];
  @Input() dots = true;
  @Input() controls = true;
  selectedImage = 0;
  @ViewChild("circledotsContainer")dotsContainer!: ElementRef<HTMLDivElement>;
  @ViewChild("circlecontrols")controlsContainer!: ElementRef<HTMLDivElement>;
  @ViewChild("slider")slider!: ElementRef<HTMLDivElement>;
  length = 0;
  arc = 0;
  radius = 300;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.length = this.dotsContainer.nativeElement.childNodes.length;
    this.arc = 2 * Math.PI * (1 / (this.length));
  }

  onResized(event: ResizedEvent) {
    this.radius = (+this.slider.nativeElement.offsetHeight) / 1.5;
    console.log(this.slider.nativeElement.offsetHeight)
    this.dotsContainer.nativeElement.style.bottom = (event.newRect.height / 2 + 40).toString() + "px";
    this.controlsContainer.nativeElement.style.bottom = (event.newRect.height / 2).toString() + "px";
    let i = 0;
    this.dotsContainer.nativeElement.childNodes.forEach((element) => {
      let angle = i * this.arc;
      let x = this.radius * Math.cos(angle);
      let y = this.radius * Math.sin(angle);
      (element as HTMLElement).style.left = x + 'px';
      (element as HTMLElement).style.top = y + 'px';
      i++;
    });
  }

  onRightClick() {
    if (this.selectedImage < this.images.length - 1)
      this.selectedImage = this.selectedImage + 1;
    else
      this.selectedImage = 0;
  }
  onLeftClick() {
    if (this.selectedImage > 0)
      this.selectedImage = this.selectedImage - 1;
    else
      this.selectedImage = this.images.length - 1;
  }
  selectImage(index: number) {
    this.selectedImage = index;
  }
}
