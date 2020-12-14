import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaPassivaEditComponent } from './renda-passiva-edit.component';

describe('RendaPassivaEditComponent', () => {
  let component: RendaPassivaEditComponent;
  let fixture: ComponentFixture<RendaPassivaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendaPassivaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendaPassivaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
