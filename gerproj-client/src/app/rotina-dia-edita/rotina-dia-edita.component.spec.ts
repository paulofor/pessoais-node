import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotinaDiaEditaComponent } from './rotina-dia-edita.component';

describe('RotinaDiaEditaComponent', () => {
  let component: RotinaDiaEditaComponent;
  let fixture: ComponentFixture<RotinaDiaEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotinaDiaEditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotinaDiaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
