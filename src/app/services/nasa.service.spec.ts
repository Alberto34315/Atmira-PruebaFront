import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FotoNasa } from '../interfaces/fotoNasa.interface';

import { NasaService } from './nasa.service';

describe('NasaService', () => {
  let service: NasaService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ['get'])
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(NasaService);
  });

  it('Debe haberse creado correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('Debe devolver 6 objetos FotoNasa de la función obtenerFotosNasa()', (done: DoneFn) => {
    const listaFotos: FotoNasa[] = []
    httpClientSpy.get.and.returnValue(of(listaFotos));
    service.obtenerFotosNasa().subscribe((resp) => {
      expect(resp.length).toEqual(6)
      done()
    });
    expect(service).toBeTruthy();
  });
});
