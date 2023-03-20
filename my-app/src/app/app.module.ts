import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RequestsService } from './requests.service';
import { TellUsComponent } from './tell-us/tell-us.component';
import { SliderComponent } from './slider/slider.component';
import { AngularResizeEventModule } from 'angular-resize-event';
import { CircleSliderComponent } from './circle-slider/circle-slider.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { ProductsComponent } from './products/products.component';
import { PressComponent } from './press/press.component';
import { CareerComponent } from './career/career.component';
import { AdvantagesComponent } from './advantages/advantages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TellUsComponent,
    SliderComponent,
    CircleSliderComponent,
    AboutCompanyComponent,
    ProductsComponent,
    PressComponent,
    CareerComponent,
    AdvantagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularResizeEventModule,
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
