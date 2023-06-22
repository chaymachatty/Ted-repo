import { TestBed } from '@angular/core/testing';

import { FBServiceService } from './fbservice.service';

describe('FBServiceService', () => {
  let service: FBServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FBServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
