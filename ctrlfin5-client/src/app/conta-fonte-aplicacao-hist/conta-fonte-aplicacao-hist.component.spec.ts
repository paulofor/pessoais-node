import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaFonteAplicacaoHistComponent } from './conta-fonte-aplicacao-hist.component';

describe('ContaFonteAplicacaoHistComponent', () => {
  let component: ContaFonteAplicacaoHistComponent;
  let fixture: ComponentFixture<ContaFonteAplicacaoHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaFonteAplicacaoHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaFonteAplicacaoHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
