import { TestBed } from '@angular/core/testing';

import { DesastreUbicacionService } from './desastre-ubicacion.service';

describe('DesastreUbicacionService', () => {
  let service: DesastreUbicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesastreUbicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
