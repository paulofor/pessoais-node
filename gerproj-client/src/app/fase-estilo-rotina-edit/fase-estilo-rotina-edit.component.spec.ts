import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseEstiloRotinaEditComponent } from './fase-estilo-rotina-edit.component';

describe('FaseEstiloRotinaEditComponent', () => {
  let component: FaseEstiloRotinaEditComponent;
  let fixture: ComponentFixture<FaseEstiloRotinaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaseEstiloRotinaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseEstiloRotinaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
