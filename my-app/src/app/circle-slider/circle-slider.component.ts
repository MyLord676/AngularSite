import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-circle-slider',
  templateUrl: './circle-slider.component.html',
  styleUrls: ['./circle-slider.component.css']
})


export class CircleSliderComponent implements OnInit, AfterViewInit {
  @Input() images: string[] = [];
  @Input() icons: string[] = [];
  @Input() selectedIcons: string[] = [];
  @Input() dots = true;
  @Input() controls = true;
  @Input() deltaAngle = 0;
  selectedImage = 0;
  @ViewChild("circledotsContainer")dotsContainer!: ElementRef<HTMLDivElement>;
  @ViewChild("circlecontrols")controlsContainer!: ElementRef<HTMLDivElement>;
  @ViewChild("slider")slider!: ElementRef<HTMLDivElement>;
  length = 0;
  arc = 0;
  radius = 0;
  iconHeight = 0;
  iconWidth = 0;
  width = 600;
  height = 600;
  viewBox = "0 0 600 600";
  cx = 300;
  cy = 300;
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.length = this.icons.length;
    this.arc = 2 * Math.PI * (1 / (this.length));
    (this.dotsContainer.nativeElement.childNodes[this.selectedImage] as HTMLImageElement).src = this.selectedIcons[this.selectedImage];
  }

  onResized(event: ResizedEvent) {
    let size = window.innerWidth / 10.6;
    if (size > 80)
      size = 80;
    if (size < 30)
      size = 30;
    this.iconHeight = size;
    this.iconWidth = this.iconHeight;

    let radius = (this.slider.nativeElement.offsetHeight) / 1.5;
    
    this.radius = (this.slider.nativeElement.offsetHeight) / 1.5;
    this.width = radius * 2;
    this.height = radius * 2;
    this.viewBox = "0 0 " + this.width + " " + this.height;
    this.cx = radius;
    this.cy = radius;

    this.dotsContainer.nativeElement.style.bottom = (event.newRect.height / 2 + this.iconHeight/2).toString() + "px";
    this.dotsContainer.nativeElement.style.left = (-(this.iconWidth/2)).toString() + "px";
    this.controlsContainer.nativeElement.style.bottom = (event.newRect.height / 2).toString() + "px";

    let dots = this.dotsContainer.nativeElement.childNodes;
    for (let i = 0; i <= dots.length - 1; i++) {
      if (i >= this.icons.length) {
        break;
      }
      let angle = i * this.arc + this.deltaAngle;
      let x = radius * Math.cos(angle);
      let y = radius * Math.sin(angle);
      let image = dots[i] as HTMLImageElement;
      image.style.left = x + 'px';
      image.style.top = y + 'px';
    }
  }

  onRightClick() {
    (this.dotsContainer.nativeElement.childNodes[this.selectedImage] as HTMLImageElement).src = this.icons[this.selectedImage];
    if (this.selectedImage < this.images.length - 1)
      this.selectedImage = this.selectedImage + 1;
    else
      this.selectedImage = 0;
    (this.dotsContainer.nativeElement.childNodes[this.selectedImage] as HTMLImageElement).src = this.selectedIcons[this.selectedImage];
  }
  onLeftClick() {
    (this.dotsContainer.nativeElement.childNodes[this.selectedImage] as HTMLImageElement).src = this.icons[this.selectedImage];
    if (this.selectedImage > 0)
      this.selectedImage = this.selectedImage - 1;
    else
      this.selectedImage = this.images.length - 1;
    (this.dotsContainer.nativeElement.childNodes[this.selectedImage] as HTMLImageElement).src = this.selectedIcons[this.selectedImage];
  }
  selectImage(index: number) {
    (this.dotsContainer.nativeElement.childNodes[this.selectedImage] as HTMLImageElement).src = this.icons[this.selectedImage];
    this.selectedImage = index;
    (this.dotsContainer.nativeElement.childNodes[this.selectedImage] as HTMLImageElement).src = this.selectedIcons[this.selectedImage];
  }
}
