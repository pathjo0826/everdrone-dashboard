import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalreportsComponent } from './operationalreports.component';

describe('OperationalreportsComponent', () => {
  let component: OperationalreportsComponent;
  let fixture: ComponentFixture<OperationalreportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationalreportsComponent]
    });
    fixture = TestBed.createComponent(OperationalreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
