import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilidadeReceitaListComponent } from './possibilidade-receita-list.component';

describe('PossibilidadeReceitaListComponent', () => {
  let component: PossibilidadeReceitaListComponent;
  let fixture: ComponentFixture<PossibilidadeReceitaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PossibilidadeReceitaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibilidadeReceitaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
