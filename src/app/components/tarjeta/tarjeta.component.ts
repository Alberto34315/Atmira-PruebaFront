import { Component, Input, OnInit } from '@angular/core';
import { FotoNasa } from 'src/app/interfaces/fotoNasa.interface';
import { UtilidadesService } from 'src/app/services/utilidades.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [
  ]
})
export class TarjetaComponent implements OnInit {
@Input() item!:FotoNasa
  constructor(private utilidadS: UtilidadesService) { }

  ngOnInit(): void {
  }

}
