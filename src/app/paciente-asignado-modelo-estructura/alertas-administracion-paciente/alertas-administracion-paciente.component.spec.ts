import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasAdministracionPacienteComponent } from './alertas-administracion-paciente.component';

describe('AlertasAdministracionPacienteComponent', () => {
  let component: AlertasAdministracionPacienteComponent;
  let fixture: ComponentFixture<AlertasAdministracionPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasAdministracionPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasAdministracionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
