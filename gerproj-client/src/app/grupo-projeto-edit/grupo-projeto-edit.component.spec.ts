import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoProjetoEditComponent } from './grupo-projeto-edit.component';

describe('GrupoProjetoEditComponent', () => {
  let component: GrupoProjetoEditComponent;
  let fixture: ComponentFixture<GrupoProjetoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoProjetoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoProjetoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
