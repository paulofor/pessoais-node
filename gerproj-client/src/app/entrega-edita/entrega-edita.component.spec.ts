import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaEditaComponent } from './entrega-edita.component';

describe('EntregaEditaComponent', () => {
  let component: EntregaEditaComponent;
  let fixture: ComponentFixture<EntregaEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaEditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
