import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaProjetoEditaComponent } from './entrega-projeto-edita.component';

describe('EntregaProjetoEditaComponent', () => {
  let component: EntregaProjetoEditaComponent;
  let fixture: ComponentFixture<EntregaProjetoEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaProjetoEditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaProjetoEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
