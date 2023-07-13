import { TestBed } from '@angular/core/testing';

import { DesastreService } from './desastre.service';

describe('DesastreService', () => {
  let service: DesastreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesastreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
