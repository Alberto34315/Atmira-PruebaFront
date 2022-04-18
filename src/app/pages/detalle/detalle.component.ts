import { Component, OnInit } from '@angular/core';
import { FotoNasa } from '../../interfaces/fotoNasa.interface';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [],
})
export class DetalleComponent implements OnInit {
  foto: FotoNasa = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private nasaService: NasaService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((element) => {
          let fecha = Object.values(element);
          return fecha[0];
        })
      )
      .subscribe((resp) => {
        this.nasaService
          .obtenerFotoNasa(resp)
          .pipe(
            map((element) => {
              let foto = Object.values(element);
              return foto[0];
            })
          )
          .subscribe((foto) => {
            this.foto = foto;
          });
      });
  }
}
