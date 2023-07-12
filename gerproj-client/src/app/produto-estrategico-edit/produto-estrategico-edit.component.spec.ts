import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEstrategicoEditComponent } from './produto-estrategico-edit.component';

describe('ProdutoEstrategicoEditComponent', () => {
  let component: ProdutoEstrategicoEditComponent;
  let fixture: ComponentFixture<ProdutoEstrategicoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoEstrategicoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoEstrategicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
