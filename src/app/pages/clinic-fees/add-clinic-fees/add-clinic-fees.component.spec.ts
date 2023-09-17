import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClinicFeesComponent } from './add-clinic-fees.component';

describe('AddClinicFeesComponent', () => {
  let component: AddClinicFeesComponent;
  let fixture: ComponentFixture<AddClinicFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClinicFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClinicFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
