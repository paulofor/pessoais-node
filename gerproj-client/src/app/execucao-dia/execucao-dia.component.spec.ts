import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucaoDiaComponent } from './execucao-dia.component';

describe('ExecucaoDiaComponent', () => {
  let component: ExecucaoDiaComponent;
  let fixture: ComponentFixture<ExecucaoDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecucaoDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecucaoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
