import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrocaProjetoEntregaComponent } from './troca-projeto-entrega.component';

describe('TrocaProjetoEntregaComponent', () => {
  let component: TrocaProjetoEntregaComponent;
  let fixture: ComponentFixture<TrocaProjetoEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrocaProjetoEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrocaProjetoEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
