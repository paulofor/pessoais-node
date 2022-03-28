import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaAplicacaoMovimentacaoMesComponent } from './conta-aplicacao-movimentacao-mes.component';

describe('ContaAplicacaoMovimentacaoMesComponent', () => {
  let component: ContaAplicacaoMovimentacaoMesComponent;
  let fixture: ComponentFixture<ContaAplicacaoMovimentacaoMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaAplicacaoMovimentacaoMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaAplicacaoMovimentacaoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
