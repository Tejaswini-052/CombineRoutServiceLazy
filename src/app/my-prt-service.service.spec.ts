import { TestBed } from '@angular/core/testing';

import { MyPrtServiceService } from './my-prt-service.service';

describe('MyPrtServiceService', () => {
  let service: MyPrtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPrtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
