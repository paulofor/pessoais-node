import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucaoDiaEditaTempoComponent } from './execucao-dia-edita-tempo.component';

describe('ExecucaoDiaEditaTempoComponent', () => {
  let component: ExecucaoDiaEditaTempoComponent;
  let fixture: ComponentFixture<ExecucaoDiaEditaTempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecucaoDiaEditaTempoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecucaoDiaEditaTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
