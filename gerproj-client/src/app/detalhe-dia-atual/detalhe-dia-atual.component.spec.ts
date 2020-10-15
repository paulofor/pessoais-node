import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDiaAtualComponent } from './detalhe-dia-atual.component';

describe('DetalheDiaAtualComponent', () => {
  let component: DetalheDiaAtualComponent;
  let fixture: ComponentFixture<DetalheDiaAtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheDiaAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDiaAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
