import { TestBed } from '@angular/core/testing';

import { ValidarRutaGuard } from './validar-ruta.guard';

describe('ValidarRutaGuard', () => {
  let guard: ValidarRutaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidarRutaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
