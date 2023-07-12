import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoTarefaDiaListaComponent } from './tempo-tarefa-dia-lista.component';

describe('TempoTarefaDiaListaComponent', () => {
  let component: TempoTarefaDiaListaComponent;
  let fixture: ComponentFixture<TempoTarefaDiaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoTarefaDiaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoTarefaDiaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
