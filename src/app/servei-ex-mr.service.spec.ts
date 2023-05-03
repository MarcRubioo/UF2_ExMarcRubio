import { TestBed } from '@angular/core/testing';

import { ServeiExMRService } from './servei-ex-mr.service';

describe('ServeiExMRService', () => {
  let service: ServeiExMRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeiExMRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
