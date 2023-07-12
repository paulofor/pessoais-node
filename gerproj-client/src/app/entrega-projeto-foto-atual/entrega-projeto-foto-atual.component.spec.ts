import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaProjetoFotoAtualComponent } from './entrega-projeto-foto-atual.component';

describe('EntregaProjetoFotoAtualComponent', () => {
  let component: EntregaProjetoFotoAtualComponent;
  let fixture: ComponentFixture<EntregaProjetoFotoAtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaProjetoFotoAtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaProjetoFotoAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
