import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProjetoEditaComponent } from './detalhe-projeto-edita.component';

describe('DetalheProjetoEditaComponent', () => {
  let component: DetalheProjetoEditaComponent;
  let fixture: ComponentFixture<DetalheProjetoEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheProjetoEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheProjetoEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
