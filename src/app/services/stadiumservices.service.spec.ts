import { TestBed } from '@angular/core/testing';

import { StadiumservicesService } from './stadiumservices.service';

describe('StadiumservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StadiumservicesService = TestBed.get(StadiumservicesService);
    expect(service).toBeTruthy();
  });
});
