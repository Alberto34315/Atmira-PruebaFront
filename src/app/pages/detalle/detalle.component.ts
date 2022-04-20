import { Component, OnInit } from '@angular/core';
import { FotoNasa } from '../../interfaces/fotoNasa.interface';
import { NasaService } from '../../services/nasa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [],
})
export class DetalleComponent implements OnInit {
  foto: FotoNasa = {};
  constructor(private nasaService: NasaService,private router:Router) {}

  ngOnInit(): void {
    this.cargarFoto();
  }

  cargarFoto() {    
    if (!this.nasaService.existeFoto()) {
     this.router.navigate(['/'])
    } else {
      this.foto = this.nasaService.devolverFoto()
    }
  }
}
