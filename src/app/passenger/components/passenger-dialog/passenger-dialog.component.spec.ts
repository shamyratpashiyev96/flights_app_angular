import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDialogComponent } from './passenger-dialog.component';

describe('PassengerDialogComponent', () => {
  let component: PassengerDialogComponent;
  let fixture: ComponentFixture<PassengerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassengerDialogComponent]
    });
    fixture = TestBed.createComponent(PassengerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
