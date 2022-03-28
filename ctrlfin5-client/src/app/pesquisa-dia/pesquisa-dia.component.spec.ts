import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaDiaComponent } from './pesquisa-dia.component';

describe('PesquisaDiaComponent', () => {
  let component: PesquisaDiaComponent;
  let fixture: ComponentFixture<PesquisaDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
