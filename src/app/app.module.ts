import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetalleComponent,
    TarjetaComponent,
    LoadSpinnerComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
