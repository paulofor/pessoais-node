import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacaoSemanalComponent } from './programacao-semanal.component';

describe('ProgramacaoSemanalComponent', () => {
  let component: ProgramacaoSemanalComponent;
  let fixture: ComponentFixture<ProgramacaoSemanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacaoSemanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacaoSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
