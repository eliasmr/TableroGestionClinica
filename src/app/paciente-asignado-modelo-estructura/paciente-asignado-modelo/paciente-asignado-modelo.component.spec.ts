import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteAsignadoModeloComponent } from './paciente-asignado-modelo.component';

describe('PacienteAsignadoModeloComponent', () => {
  let component: PacienteAsignadoModeloComponent;
  let fixture: ComponentFixture<PacienteAsignadoModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteAsignadoModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteAsignadoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
