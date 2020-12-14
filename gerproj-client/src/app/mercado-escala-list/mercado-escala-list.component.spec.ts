import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoEscalaListComponent } from './mercado-escala-list.component';

describe('MercadoEscalaListComponent', () => {
  let component: MercadoEscalaListComponent;
  let fixture: ComponentFixture<MercadoEscalaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoEscalaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoEscalaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
