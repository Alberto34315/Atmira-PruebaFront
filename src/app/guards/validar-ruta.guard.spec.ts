import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ValidarRutaGuard } from './validar-ruta.guard';

describe('ValidarRutaGuard', () => {
  let guard: ValidarRutaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(ValidarRutaGuard);
  });

  it('Se ha creado correctamented', () => {
    expect(guard).toBeTruthy();
  });

});
