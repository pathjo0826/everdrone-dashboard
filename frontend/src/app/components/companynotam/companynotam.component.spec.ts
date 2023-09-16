import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanynotamComponent } from './companynotam.component';

describe('CompanynotamComponent', () => {
  let component: CompanynotamComponent;
  let fixture: ComponentFixture<CompanynotamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanynotamComponent]
    });
    fixture = TestBed.createComponent(CompanynotamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
