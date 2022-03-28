import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoContaPeriodoComponent } from './movimentacao-conta-periodo.component';

describe('MovimentacaoContaPeriodoComponent', () => {
  let component: MovimentacaoContaPeriodoComponent;
  let fixture: ComponentFixture<MovimentacaoContaPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoContaPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoContaPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
