import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadeMacroeconomicaListComponent } from './oportunidade-macroeconomica-list.component';

describe('OportunidadeMacroeconomicaListComponent', () => {
  let component: OportunidadeMacroeconomicaListComponent;
  let fixture: ComponentFixture<OportunidadeMacroeconomicaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunidadeMacroeconomicaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunidadeMacroeconomicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
