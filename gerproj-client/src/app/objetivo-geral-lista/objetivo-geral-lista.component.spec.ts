import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoGeralListaComponent } from './objetivo-geral-lista.component';

describe('ObjetivoGeralListaComponent', () => {
  let component: ObjetivoGeralListaComponent;
  let fixture: ComponentFixture<ObjetivoGeralListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivoGeralListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoGeralListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
