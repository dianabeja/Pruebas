import { TestBed } from '@angular/core/testing';

import { InterestService } from './interest.service';

describe('InterestService', () => {
  let service: InterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
