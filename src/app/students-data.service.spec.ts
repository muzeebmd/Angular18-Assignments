import { TestBed } from '@angular/core/testing';

import { StudentsDataService } from './services-all/students-data.service';

describe('StudentsDataService', () => {
  let service: StudentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
