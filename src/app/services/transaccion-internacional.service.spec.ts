import { TestBed } from '@angular/core/testing';

import { TransaccionInternacionalService } from './transaccion-internacional.service';

describe('TransaccionInternacionalService', () => {
  let service: TransaccionInternacionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaccionInternacionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
