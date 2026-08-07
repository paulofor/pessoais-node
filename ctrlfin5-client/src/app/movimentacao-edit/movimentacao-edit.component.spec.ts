import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoEditComponent } from './movimentacao-edit.component';

describe('MovimentacaoEditComponent', () => {
  let component: MovimentacaoEditComponent;
  let fixture: ComponentFixture<MovimentacaoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacaoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should order displayed periods by year and month instead of alphabetically', () => {
    expect(component.normalizaDataPeriodo({ apresentacao: 'ago-2026' } as any))
      .toBeGreaterThan(component.normalizaDataPeriodo({ apresentacao: 'jul-2026' } as any));
  });

  it('should normalize ISO reference dates', () => {
    expect(component.normalizaDataPeriodo({ dataReferencia: '2026-08-01T00:00:00.000Z' } as any))
      .toBe(202608);
  });
});
