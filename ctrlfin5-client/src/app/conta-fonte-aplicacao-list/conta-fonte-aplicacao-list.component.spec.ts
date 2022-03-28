import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaFonteAplicacaoListComponent } from './conta-fonte-aplicacao-list.component';

describe('ContaFonteAplicacaoListComponent', () => {
  let component: ContaFonteAplicacaoListComponent;
  let fixture: ComponentFixture<ContaFonteAplicacaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaFonteAplicacaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaFonteAplicacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
