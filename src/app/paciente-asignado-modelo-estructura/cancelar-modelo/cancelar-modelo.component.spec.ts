import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarModeloComponent } from './cancelar-modelo.component';

describe('CancelarModeloComponent', () => {
  let component: CancelarModeloComponent;
  let fixture: ComponentFixture<CancelarModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelarModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
