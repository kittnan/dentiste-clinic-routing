import { TestBed } from '@angular/core/testing';

import { FunctionPromiseService } from './function-promise.service';

describe('FunctionPromiseService', () => {
  let service: FunctionPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
