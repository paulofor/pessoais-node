import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoEscalaEditComponent } from './mercado-escala-edit.component';

describe('MercadoEscalaEditComponent', () => {
  let component: MercadoEscalaEditComponent;
  let fixture: ComponentFixture<MercadoEscalaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoEscalaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoEscalaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
