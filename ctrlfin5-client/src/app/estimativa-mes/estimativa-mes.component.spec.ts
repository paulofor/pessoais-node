import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimativaMesComponent } from './estimativa-mes.component';

describe('EstimativaMesComponent', () => {
  let component: EstimativaMesComponent;
  let fixture: ComponentFixture<EstimativaMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimativaMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimativaMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
