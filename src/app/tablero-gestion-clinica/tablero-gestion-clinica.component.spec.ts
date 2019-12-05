import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroGestionClinicaComponent } from './tablero-gestion-clinica.component';

describe('TableroGestionClinicaComponent', () => {
  let component: TableroGestionClinicaComponent;
  let fixture: ComponentFixture<TableroGestionClinicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroGestionClinicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroGestionClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
