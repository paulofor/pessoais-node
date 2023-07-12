import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseEstiloRotinaListComponent } from './fase-estilo-rotina-list.component';

describe('FaseEstiloRotinaListComponent', () => {
  let component: FaseEstiloRotinaListComponent;
  let fixture: ComponentFixture<FaseEstiloRotinaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaseEstiloRotinaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseEstiloRotinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
