import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseEscolhaComponent } from './base-escolha.component';

describe('BaseEscolhaComponent', () => {
  let component: BaseEscolhaComponent;
  let fixture: ComponentFixture<BaseEscolhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseEscolhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseEscolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
