import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronechartComponent } from './dronechart.component';

describe('DronechartComponent', () => {
  let component: DronechartComponent;
  let fixture: ComponentFixture<DronechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DronechartComponent]
    });
    fixture = TestBed.createComponent(DronechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
