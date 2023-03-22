import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperateComponent } from './cooperate.component';

describe('ContentComponent', () => {
  let component: CooperateComponent;
  let fixture: ComponentFixture<CooperateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
