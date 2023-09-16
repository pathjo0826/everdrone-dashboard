import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotresourcesComponent } from './pilotresources.component';

describe('PilotresourcesComponent', () => {
  let component: PilotresourcesComponent;
  let fixture: ComponentFixture<PilotresourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PilotresourcesComponent]
    });
    fixture = TestBed.createComponent(PilotresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
