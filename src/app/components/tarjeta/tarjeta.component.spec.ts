import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TarjetaComponent } from './tarjeta.component';

describe('Pruebas en el "TarjetaComponent"', () => {
  let component: TarjetaComponent;
  let fixture: ComponentFixture<TarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe haberse creado correctamente', () => {
    expect(component).toBeTruthy();
  });
  
  it('El objeto item de tipo FotoNasa debe estar vacío {}', () => {
    expect(component.item).toEqual({});
  });
});
