import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaAplicacaoMesComponent } from './conta-aplicacao-mes.component';

describe('ContaAplicacaoMesComponent', () => {
  let component: ContaAplicacaoMesComponent;
  let fixture: ComponentFixture<ContaAplicacaoMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaAplicacaoMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaAplicacaoMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
