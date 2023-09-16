import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherradarComponent } from './weatherradar.component';

describe('WeatherradarComponent', () => {
  let component: WeatherradarComponent;
  let fixture: ComponentFixture<WeatherradarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherradarComponent]
    });
    fixture = TestBed.createComponent(WeatherradarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
