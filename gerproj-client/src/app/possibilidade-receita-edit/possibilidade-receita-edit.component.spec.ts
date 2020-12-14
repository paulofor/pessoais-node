import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilidadeReceitaEditComponent } from './possibilidade-receita-edit.component';

describe('PossibilidadeReceitaEditComponent', () => {
  let component: PossibilidadeReceitaEditComponent;
  let fixture: ComponentFixture<PossibilidadeReceitaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibilidadeReceitaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibilidadeReceitaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
