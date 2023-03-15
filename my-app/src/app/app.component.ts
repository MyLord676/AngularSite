import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular test';
  sliderImages = [/*"assets/images/icons/favicon_16x16.svg",*/"assets/images/banner1.png", "assets/images/banner2.png", "assets/images/banner1.png", "assets/images/banner2.png"];
  circleSliderImages = ["assets/images/circle1.png", "assets/images/circle2.png", "assets/images/circle3.png", "assets/images/circle4.png", "assets/images/circle5.png", "assets/images/circle6.png", "assets/images/circle7.png", "assets/images/circle8.png"];
  rotationAngle = -Math.PI / 2;
}
