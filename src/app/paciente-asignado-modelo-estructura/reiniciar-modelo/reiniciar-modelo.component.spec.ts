import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReiniciarModeloComponent } from './reiniciar-modelo.component';

describe('ReiniciarModeloComponent', () => {
  let component: ReiniciarModeloComponent;
  let fixture: ComponentFixture<ReiniciarModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReiniciarModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReiniciarModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
