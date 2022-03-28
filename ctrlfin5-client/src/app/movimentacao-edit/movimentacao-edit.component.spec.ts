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
});
