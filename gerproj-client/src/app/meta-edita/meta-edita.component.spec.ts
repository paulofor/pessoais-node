import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaEditaComponent } from './meta-edita.component';

describe('MetaEditaComponent', () => {
  let component: MetaEditaComponent;
  let fixture: ComponentFixture<MetaEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaEditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
