import { TestBed } from '@angular/core/testing';

import { TipoDonacionService } from './tipo-donacion.service';

describe('TipoDonacionService', () => {
  let service: TipoDonacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoDonacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
