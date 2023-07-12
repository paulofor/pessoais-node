import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseItemComListaComponent } from './base-item-com-lista.component';

describe('BaseItemComListaComponent', () => {
  let component: BaseItemComListaComponent;
  let fixture: ComponentFixture<BaseItemComListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseItemComListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseItemComListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
