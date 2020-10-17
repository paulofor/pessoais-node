import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDiaPassadoComponent } from './detalhe-dia-passado.component';

describe('DetalheDiaPassadoComponent', () => {
  let component: DetalheDiaPassadoComponent;
  let fixture: ComponentFixture<DetalheDiaPassadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheDiaPassadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDiaPassadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
