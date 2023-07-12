import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoTarefaDiaEditaComponent } from './tempo-tarefa-dia-edita.component';

describe('TempoTarefaDiaEditaComponent', () => {
  let component: TempoTarefaDiaEditaComponent;
  let fixture: ComponentFixture<TempoTarefaDiaEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempoTarefaDiaEditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoTarefaDiaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
