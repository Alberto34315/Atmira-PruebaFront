import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FotoNasa } from '../interfaces/fotoNasa.interface';
import { environment } from '../../environments/environment.prod';
import { formatDate } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES, 'es');

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {}
  get httpParams() {
    let fechaInicio = new Date();
    fechaInicio.setDate(new Date().getDate() - 5);
    let fechaFormateada = formatDate(fechaInicio, 'YYYY-MM-dd', 'es');
    return new HttpParams()
      .set('api_key', environment.apiKey)
      .set('start_date', fechaFormateada)
      .set('end_date', '');
  }

  obtenerFotosNasa(): Observable<FotoNasa[]> {
    return this.http.get<FotoNasa[]>(`${environment.apiUrl}`, {
      params: this.httpParams,
    });
  }

  obtenerFotoNasa(fecha: string): Observable<FotoNasa> {
    let params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('start_date', fecha)
      .set('end_date', fecha);
    return this.http.get<FotoNasa>(`${environment.apiUrl}`, { params: params });
  }

  guardarFoto(foto: FotoNasa) {
    localStorage.setItem('foto', JSON.stringify(foto));
  }

  existeFoto() {
    let flag = false;
    if (JSON.parse(String(localStorage.getItem('foto')))) {
      flag = true;
    }
    return flag;
  }

  devolverFoto(): FotoNasa {
    return JSON.parse(String(localStorage.getItem('foto')));
  }
}
