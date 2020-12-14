import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendaPassivaListComponent } from './renda-passiva-list.component';

describe('RendaPassivaListComponent', () => {
  let component: RendaPassivaListComponent;
  let fixture: ComponentFixture<RendaPassivaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendaPassivaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendaPassivaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
