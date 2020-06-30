import { TestBed } from '@angular/core/testing';

import { RestSerivesService } from './rest-serives.service';

describe('RestSerivesService', () => {
  let service: RestSerivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestSerivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
