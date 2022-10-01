import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimativaEditaComponent } from './estimativa-edita.component';

describe('EstimativaEditaComponent', () => {
  let component: EstimativaEditaComponent;
  let fixture: ComponentFixture<EstimativaEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimativaEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimativaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
