import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMesesComponent } from './total-meses.component';

describe('TotalMesesComponent', () => {
  let component: TotalMesesComponent;
  let fixture: ComponentFixture<TotalMesesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalMesesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
