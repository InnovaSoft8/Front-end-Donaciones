import { TestBed } from '@angular/core/testing';

import { PublicacionRedesSocialesService } from './publicacion-redes-sociales.service';

describe('PublicacionRedesSocialesService', () => {
  let service: PublicacionRedesSocialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacionRedesSocialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
