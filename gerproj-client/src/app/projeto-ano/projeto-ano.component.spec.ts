import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoAnoComponent } from './projeto-ano.component';

describe('ProjetoAnoComponent', () => {
  let component: ProjetoAnoComponent;
  let fixture: ComponentFixture<ProjetoAnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoAnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
