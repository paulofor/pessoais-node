import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoProjetoListComponent } from './grupo-projeto-list.component';

describe('GrupoProjetoListComponent', () => {
  let component: GrupoProjetoListComponent;
  let fixture: ComponentFixture<GrupoProjetoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoProjetoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoProjetoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
