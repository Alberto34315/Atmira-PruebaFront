import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
} from '@angular/router';
import { Observable, of, tap, map } from 'rxjs';
import { NasaService } from '../services/nasa.service';

@Injectable({
  providedIn: 'root',
})
export class ValidarRutaGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nasaService: NasaService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    let flag = true;
    this.nasaService.obtenerFotoNasa(Object.values(route.params)[0]).subscribe(
      (resp) => {
        flag = true;
      },
      (error) => {
        this.router.navigate(['/']);
        flag = false;
      }
    );
    return flag;
  }

  canLoad(): Observable<boolean> | boolean {
    let flag = true;
    this.nasaService
      .obtenerFotoNasa(Object.values(this.activatedRoute.params)[0])
      .subscribe(
        (resp) => {
          flag = true;
        },
        (error) => {
          this.router.navigate(['/']);
          flag = false;
        }
      );
    return flag;
  }
}
