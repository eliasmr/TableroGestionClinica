import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDemograficosComponent } from './datos-demograficos.component';

describe('DatosDemograficosComponent', () => {
  let component: DatosDemograficosComponent;
  let fixture: ComponentFixture<DatosDemograficosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosDemograficosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDemograficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
