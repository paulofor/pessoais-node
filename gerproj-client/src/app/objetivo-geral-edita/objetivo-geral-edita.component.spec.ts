import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivoGeralEditaComponent } from './objetivo-geral-edita.component';

describe('ObjetivoGeralEditaComponent', () => {
  let component: ObjetivoGeralEditaComponent;
  let fixture: ComponentFixture<ObjetivoGeralEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjetivoGeralEditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetivoGeralEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
