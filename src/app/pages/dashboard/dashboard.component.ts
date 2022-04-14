import { Component, OnInit } from '@angular/core';
import { UtilidadesService } from 'src/app/services/utilidades.service';
import { FotoNasa } from '../../interfaces/fotoNasa.interface';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  listaFotos: FotoNasa[] = [];
  constructor(private nasaService: NasaService, private utilidadS: UtilidadesService) { }

  ngOnInit(): void {
    this.nasaService.obtenerFotosNasa().subscribe((resp) => {
      this.listaFotos = resp;      
      this.utilidadS.recogerFotos(this.listaFotos)
    });
  }
}
