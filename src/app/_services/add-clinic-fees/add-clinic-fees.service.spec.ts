import { TestBed } from '@angular/core/testing';

import { AddClinicFeesService } from './add-clinic-fees.service';

describe('AddClinicFeesService', () => {
  let service: AddClinicFeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddClinicFeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
