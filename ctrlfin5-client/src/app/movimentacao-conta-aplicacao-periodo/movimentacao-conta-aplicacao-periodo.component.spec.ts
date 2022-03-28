import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoContaAplicacaoPeriodoComponent } from './movimentacao-conta-aplicacao-periodo.component';

describe('MovimentacaoContaAplicacaoPeriodoComponent', () => {
  let component: MovimentacaoContaAplicacaoPeriodoComponent;
  let fixture: ComponentFixture<MovimentacaoContaAplicacaoPeriodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoContaAplicacaoPeriodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoContaAplicacaoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
