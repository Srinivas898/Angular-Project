import { TestBed } from '@angular/core/testing';

import { FlipcartApiService } from './flipcart-api.service';

describe('FlipcartApiService', () => {
  let service: FlipcartApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipcartApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
