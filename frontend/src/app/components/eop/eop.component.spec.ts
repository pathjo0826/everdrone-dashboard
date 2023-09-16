import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EopComponent } from './eop.component';

describe('EopComponent', () => {
  let component: EopComponent;
  let fixture: ComponentFixture<EopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EopComponent]
    });
    fixture = TestBed.createComponent(EopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
