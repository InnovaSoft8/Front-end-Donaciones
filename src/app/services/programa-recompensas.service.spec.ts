import { TestBed } from '@angular/core/testing';

import { ProgramaRecompensasService } from './programa-recompensas.service';

describe('ProgramaRecompensasService', () => {
  let service: ProgramaRecompensasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgramaRecompensasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
