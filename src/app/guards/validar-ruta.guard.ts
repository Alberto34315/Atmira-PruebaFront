import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router
} from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { UtilidadesService } from '../services/utilidades.service';

@Injectable({
  providedIn: 'root',
})
export class ValidarRutaGuard implements CanActivate, CanLoad {

  constructor(private utilidadS: UtilidadesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    return of(this.utilidadS.buscarFoto(Object.values(route.params)[0])).pipe(
      tap((existeFoto) => {
        if (!existeFoto) {
          this.router.navigate(['/']);
        }
      })
    );
  }
  canLoad(): Observable<boolean> | boolean {
    return of(this.utilidadS.buscarFoto(Object.values(this.activatedRoute.params)[0])).pipe(
      tap((existeFoto) => {
        if (!existeFoto) {
          this.router.navigate(['/']);
        }
      })
    );
  }
}
