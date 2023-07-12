import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteracaoEntregaEditaComponent } from './iteracao-entrega-edita.component';

describe('IteracaoEntregaEditaComponent', () => {
  let component: IteracaoEntregaEditaComponent;
  let fixture: ComponentFixture<IteracaoEntregaEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteracaoEntregaEditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteracaoEntregaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
