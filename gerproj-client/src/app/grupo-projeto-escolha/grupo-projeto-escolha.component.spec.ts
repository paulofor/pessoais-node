import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoProjetoEscolhaComponent } from './grupo-projeto-escolha.component';

describe('GrupoProjetoEscolhaComponent', () => {
  let component: GrupoProjetoEscolhaComponent;
  let fixture: ComponentFixture<GrupoProjetoEscolhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoProjetoEscolhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoProjetoEscolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
