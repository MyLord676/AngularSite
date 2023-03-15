import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleSliderComponent } from './circle-slider.component';

describe('CircleSliderComponent', () => {
  let component: CircleSliderComponent;
  let fixture: ComponentFixture<CircleSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
