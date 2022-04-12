import { Component, OnInit } from '@angular/core';
import { FotoNasa } from '../../interfaces/fotoNasa.interface';
import { ActivatedRoute } from '@angular/router';
import { UtilidadesService } from 'src/app/services/utilidades.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [],
})
export class DetalleComponent implements OnInit {
  foto!: FotoNasa;
  constructor(private activatedRoute: ActivatedRoute, private utilidadS: UtilidadesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map(element => {
          let title = Object.values(element)
          return title[0]
        })
      )
      .subscribe(resp => {
        this.foto = this.utilidadS.devolverFoto(resp);
      })
  }
}
