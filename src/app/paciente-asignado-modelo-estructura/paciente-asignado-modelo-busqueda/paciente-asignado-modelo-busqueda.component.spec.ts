import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteAsignadoModeloBusquedaComponent } from './paciente-asignado-modelo-busqueda.component';

describe('PacienteAsignadoModeloBusquedaComponent', () => {
  let component: PacienteAsignadoModeloBusquedaComponent;
  let fixture: ComponentFixture<PacienteAsignadoModeloBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteAsignadoModeloBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteAsignadoModeloBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
