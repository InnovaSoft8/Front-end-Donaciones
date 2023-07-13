import { TestBed } from '@angular/core/testing';

import { ProductoDonadoService } from './producto-donado.service';

describe('ProductoDonadoService', () => {
  let service: ProductoDonadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoDonadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
