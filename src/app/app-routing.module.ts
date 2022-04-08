import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ValidarRutaGuard } from './guards/validar-ruta.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'detalles',
    component: DetalleComponent,
    //canActivate: [ValidarRutaGuard],
  //  canLoad: [ValidarRutaGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
