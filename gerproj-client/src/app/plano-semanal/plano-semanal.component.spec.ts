import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoSemanalComponent } from './plano-semanal.component';

describe('PlanoSemanalComponent', () => {
  let component: PlanoSemanalComponent;
  let fixture: ComponentFixture<PlanoSemanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoSemanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
