import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolheProjetoParaObjetivoComponent } from './escolhe-projeto-para-objetivo.component';

describe('EscolheProjetoParaObjetivoComponent', () => {
  let component: EscolheProjetoParaObjetivoComponent;
  let fixture: ComponentFixture<EscolheProjetoParaObjetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolheProjetoParaObjetivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolheProjetoParaObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
