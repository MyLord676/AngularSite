import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular test';
  sliderImages = ["assets/images/banner1.png", "assets/images/banner2.png", "assets/images/banner1.png", "assets/images/banner2.png"];
  circleSliderImages = ["assets/images/circle1.png", "assets/images/circle2.png", "assets/images/circle3.png", "assets/images/circle4.png", "assets/images/circle5.png", "assets/images/circle6.png", "assets/images/circle7.png", "assets/images/circle8.png"];
  circleSliderIcons = ["assets/images/icons/circle-icon1.svg", "assets/images/icons/circle-icon2.svg", "assets/images/icons/circle-icon3.svg", "assets/images/icons/circle-icon4.svg", "assets/images/icons/circle-icon5.svg", "assets/images/icons/circle-icon6.svg", "assets/images/icons/circle-icon7.svg", "assets/images/icons/circle-icon8.svg"];
  circleSliderSelectedIcons = ["assets/images/icons/circle-selected-icon1.svg", "assets/images/icons/circle-selected-icon2.svg", "assets/images/icons/circle-selected-icon3.svg", "assets/images/icons/circle-selected-icon4.svg", "assets/images/icons/circle-selected-icon5.svg", "assets/images/icons/circle-selected-icon6.svg", "assets/images/icons/circle-selected-icon7.svg", "assets/images/icons/circle-selected-icon8.svg"];
  rotationAngle = -Math.PI / 2;
}
