import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaMesComponent } from './conta-mes.component';

describe('ContaMesComponent', () => {
  let component: ContaMesComponent;
  let fixture: ComponentFixture<ContaMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
