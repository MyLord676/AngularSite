import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  public screenWidth: number;
  public screenHeight: number;

  public pageYOffset: number;
  public pageXOffset: number;

  public offsetTop: number = 0;

  public position: number = 0;

  @ViewChild("text")text!: ElementRef<HTMLDivElement>;
  @ViewChild("scroll")scroll!: ElementRef<HTMLDivElement>;

  constructor(private cdRef:ChangeDetectorRef) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.pageYOffset = window.pageYOffset;
    this.pageXOffset = window.pageXOffset;
  }
  
  ngAfterViewInit(): void {
    this.offsetTop = this.text.nativeElement.offsetTop;
    this.cdRef.detectChanges();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    this.offsetTop = this.text.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  scrollResize(event: Event) {
    this.pageYOffset = window.pageYOffset;
    this.pageXOffset = window.pageXOffset;
    this.offsetTop = this.text.nativeElement.offsetTop;
    console.log(this.pageYOffset - this.offsetTop);
    this.checkPosition();
  }

  checkPosition() {
    this.position = this.pageYOffset - this.offsetTop + 50;
    if (this.position < 0)
    this.position = 0;
    let height = this.text.nativeElement.offsetHeight - this.scroll.nativeElement.offsetHeight;
    if (this.position > height)
    this.position = height;
  }
}
