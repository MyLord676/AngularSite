import { Component, Input, OnInit } from '@angular/core';


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
  
  ngOnInit(): void {
    //setInterval(() => {console.log("interval")}, 3000);
    //throw new Error('Method not implemented.');
  }

  selectImage(index: number) {
    this.selectedImage = index;
  }
}
