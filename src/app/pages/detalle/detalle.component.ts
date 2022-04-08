import { Component, OnInit } from '@angular/core';
import { FotoNasa } from '../../interfaces/fotoNasa.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [],
})
export class DetalleComponent implements OnInit {
  foto!: FotoNasa;
  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(resp=>{
      console.log(resp);
      
    })
  }
}
