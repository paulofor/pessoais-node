import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaPassivaProjetoEscolhaComponent } from './renda-passiva-projeto-escolha.component';

describe('RendaPassivaProjetoEscolhaComponent', () => {
  let component: RendaPassivaProjetoEscolhaComponent;
  let fixture: ComponentFixture<RendaPassivaProjetoEscolhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendaPassivaProjetoEscolhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendaPassivaProjetoEscolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
