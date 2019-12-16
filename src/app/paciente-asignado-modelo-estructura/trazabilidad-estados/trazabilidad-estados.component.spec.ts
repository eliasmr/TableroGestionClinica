import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazabilidadEstadosComponent } from './trazabilidad-estados.component';

describe('TrazabilidadEstadosComponent', () => {
  let component: TrazabilidadEstadosComponent;
  let fixture: ComponentFixture<TrazabilidadEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrazabilidadEstadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrazabilidadEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
