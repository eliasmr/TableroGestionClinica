import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesessionComponent } from './detallesession.component';

describe('DetallesessionComponent', () => {
  let component: DetallesessionComponent;
  let fixture: ComponentFixture<DetallesessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
