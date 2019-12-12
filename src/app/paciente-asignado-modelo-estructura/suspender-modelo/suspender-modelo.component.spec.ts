import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspenderModeloComponent } from './suspender-modelo.component';

describe('SuspenderModeloComponent', () => {
  let component: SuspenderModeloComponent;
  let fixture: ComponentFixture<SuspenderModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspenderModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspenderModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
