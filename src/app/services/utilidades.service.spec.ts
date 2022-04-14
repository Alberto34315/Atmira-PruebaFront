import { TestBed } from '@angular/core/testing';
import { FotoNasa } from '../interfaces/fotoNasa.interface';

import { UtilidadesService } from './utilidades.service';

describe('UtilidadesService', () => {
  let service: UtilidadesService;
  const lista: FotoNasa[] = [
    {
      copyright: "Gabriel Rodrigues Santos",
      date: "2022-04-14",
      explanation: "Unlike most entries in Charles Messier's famous catalog of deep sky objects, M24 is not a bright galaxy, star cluster, or nebula. It's a gap in nearby, obscuring interstellar dust clouds that allows a view of the distant stars in the Sagittarius spiral arm of our Milky Way galaxy. When you gaze at the star cloud with binoculars or small telescope you are looking through a window over 300 light-years wide at stars some 10,000 light-years or more from Earth. Sometimes called the Small Sagittarius Star Cloud, M24's luminous stars fill this gorgeous starscape. Covering over 3 degrees or the width of 6 full moons in the constellation Sagittarius, the telescopic field of view includes dark markings B92 and B93 just above center, along with other clouds of dust and glowing nebulae toward the center of the Milky Way.",
      hdurl: "https://apod.nasa.gov/apod/image/2204/M24_APOD_GabrielRodriguesSantosAPOD.jpg",
      media_type: "image",
      service_version: "v1",
      title: "Messier 24: Sagittarius Star Cloud",
      url: "https://apod.nasa.gov/apod/image/2204/M24_APOD_GabrielRodriguesSantosAPOD1100.jpg"
    }
  ]
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilidadesService);
  });

  it('Se ha creado el servicio correctamente', () => {
    expect(service).toBeTruthy();
  });


  it('La función recogerFotos(lista: FotoNasa[]) debe devolver false si recibe un array vacío', () => {
    const lista: FotoNasa[] = []
    expect(service.recogerFotos(lista)).toBeFalse();
  });

  it('La función recogerFotos(lista: FotoNasa[]) debe devolver true si recibe un array con objetos FotoNasa', () => {
    expect(service.recogerFotos(lista)).toBeTrue();
  });

  it('La función buscarFoto(title: string) debe devolver true si recibe un title que coincida con las fotos recogidas en el localStorage', () => {
    service.recogerFotos(lista)
    const title: string = "Messier 24: Sagittarius Star Cloud"
    expect(service.buscarFoto(title)).toBeTrue();
  });

  it('La función buscarFoto(title: string) debe devolver false si recibe un title no que coincida con las fotos recogidas en el localStorage', () => {
    service.recogerFotos(lista)
    const title: string = "Titulo inventado"
    expect(service.buscarFoto(title)).toBeFalse();
  });

  it('La función devolverFoto(title: string) debe devolver el objeto con el que coincida el title pasado, con las fotos recogidas en el localStorage', () => {
    service.recogerFotos(lista)
    const title: string = "Messier 24: Sagittarius Star Cloud"
    expect(service.devolverFoto(title)).toEqual(lista[0]);
  });

  it('La función devolverFoto(title: string) debe devolver un objeto vacío {} si recibe un title no que coincida con las fotos recogidas en el localStorage', () => {
    service.recogerFotos(lista)
    const title: string = "Titulo inventado"
    expect(service.devolverFoto(title)).toEqual({});
  });

});
