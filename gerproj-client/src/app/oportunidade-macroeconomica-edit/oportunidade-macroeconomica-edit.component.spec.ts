import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadeMacroeconomicaEditComponent } from './oportunidade-macroeconomica-edit.component';

describe('OportunidadeMacroeconomicaEditComponent', () => {
  let component: OportunidadeMacroeconomicaEditComponent;
  let fixture: ComponentFixture<OportunidadeMacroeconomicaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunidadeMacroeconomicaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunidadeMacroeconomicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
