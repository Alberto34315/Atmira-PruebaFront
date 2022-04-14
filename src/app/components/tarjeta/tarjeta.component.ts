import { Component, Input, OnInit } from '@angular/core';
import { FotoNasa } from 'src/app/interfaces/fotoNasa.interface';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: [
  ]
})
export class TarjetaComponent implements OnInit {
  @Input() item: FotoNasa = {}
  constructor() { }

  ngOnInit(): void {
  }

}
