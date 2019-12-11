import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticosActivosComponent } from './diagnosticos-activos.component';

describe('DiagnosticosActivosComponent', () => {
  let component: DiagnosticosActivosComponent;
  let fixture: ComponentFixture<DiagnosticosActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticosActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
