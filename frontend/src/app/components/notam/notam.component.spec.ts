import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOTAMComponent } from './notam.component';

describe('NOTAMComponent', () => {
  let component: NOTAMComponent;
  let fixture: ComponentFixture<NOTAMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NOTAMComponent]
    });
    fixture = TestBed.createComponent(NOTAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
