import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEstrategicoListComponent } from './produto-estrategico-list.component';

describe('ProdutoEstrategicoListComponent', () => {
  let component: ProdutoEstrategicoListComponent;
  let fixture: ComponentFixture<ProdutoEstrategicoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoEstrategicoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoEstrategicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
