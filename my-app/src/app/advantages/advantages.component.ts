import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})

export class AdvantagesComponent {
  @ViewChild("image") image!: ElementRef<HTMLDivElement>;
  @ViewChild("content") content!: ElementRef<HTMLDivElement>;

  zero = 0;
  bottom = "no-repeat";
  public screenWidth: number;
  public screenHeight: number;

  public wrapperWidth: number = 0;
  public wrapperHeight: number = 0;

  public imagePosition: string = '';
  public imageUrl: string = '';

  constructor(private cdRef: ChangeDetectorRef) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  ngAfterViewInit(): void {
    this.wrapperWidth = this.content.nativeElement.offsetWidth;
    this.wrapperHeight = this.content.nativeElement.offsetHeight;
    this.cdRef.detectChanges();

    this.imageUrl = this.calculateImageUrl();
    this.imagePosition = this.calculateImagePosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.wrapperWidth = this.content.nativeElement.offsetWidth;
    this.wrapperHeight = this.content.nativeElement.offsetHeight;

    this.imageUrl = this.calculateImageUrl();
    this.imagePosition = this.calculateImagePosition();
  }

  calculateImagePosition() {
    return (this.screenWidth / 2 - this.wrapperWidth / 2 - 12).toString() + 'px' + ' bottom';
  }

  calculateImageUrl() {
    if (this.screenWidth <= 1450 && this.screenWidth > 480)
      return 'url(/assets/images/advantages1.png)';
    if (this.screenWidth <= 480)
      return 'url(/assets/images/advantages2.png)';
    return 'url(/assets/images/advantages.png)';
  }
}
