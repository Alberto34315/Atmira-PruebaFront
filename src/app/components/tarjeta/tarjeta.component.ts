import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { FotoNasa } from 'src/app/interfaces/fotoNasa.interface';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [],
})
export class TarjetaComponent implements OnInit {
  @Input() foto: FotoNasa = {};
  constructor(private router: Router, private nasaS: NasaService) {}

  ngOnInit(): void {}

  detalles(foto: FotoNasa) {
    this.nasaS.guardarFoto(foto);
    this.router.navigate(['/detalles']);
  }
}
