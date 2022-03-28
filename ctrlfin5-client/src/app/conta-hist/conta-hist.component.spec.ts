import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaHistComponent } from './conta-hist.component';

describe('ContaHistComponent', () => {
  let component: ContaHistComponent;
  let fixture: ComponentFixture<ContaHistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaHistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
