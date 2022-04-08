import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FotoNasa } from '../interfaces/fotoNasa.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {}

  obtenerFotosNasa(): Observable<FotoNasa[]> {
    return this.http.get<FotoNasa[]>(`${environment.apiUrl}`);
  }
}
