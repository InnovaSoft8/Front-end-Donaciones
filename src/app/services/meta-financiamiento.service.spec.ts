import { TestBed } from '@angular/core/testing';

import { MetaFinanciamientoService } from './meta-financiamiento.service';

describe('MetaFinanciamientoService', () => {
  let service: MetaFinanciamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaFinanciamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
