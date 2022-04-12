import { Injectable } from '@angular/core';
import { FotoNasa } from '../interfaces/fotoNasa.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {
  private listaFotos: FotoNasa[] = []
  constructor() { }

  recogerFotos(lista: FotoNasa[]) {
    this.listaFotos = lista;
    localStorage.setItem("fotos", JSON.stringify(this.listaFotos))
  }
  buscarFoto(title: string): boolean {
    let flag = false;
    this.listaFotos = JSON.parse(localStorage.getItem("fotos") || "")
    if (this.listaFotos.find(element => element.title === title)) {
      flag = true;
    }
    return flag;
  }

  devolverFoto(title: string) {
    let foto;
    this.listaFotos = JSON.parse(localStorage.getItem("fotos") || "")
    if (this.buscarFoto(title)) {
      foto = this.listaFotos.find(element => element.title === title);
    }
    return foto || {}
  }
}
