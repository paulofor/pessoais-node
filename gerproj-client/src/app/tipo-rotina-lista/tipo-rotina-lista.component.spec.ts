import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRotinaListaComponent } from './tipo-rotina-lista.component';

describe('TipoRotinaListaComponent', () => {
  let component: TipoRotinaListaComponent;
  let fixture: ComponentFixture<TipoRotinaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoRotinaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoRotinaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
