import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoAbertaComponent } from './movimentacao-aberta.component';

describe('MovimentacaoAbertaComponent', () => {
  let component: MovimentacaoAbertaComponent;
  let fixture: ComponentFixture<MovimentacaoAbertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoAbertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoAbertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
