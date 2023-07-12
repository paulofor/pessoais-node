import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoPorProdutoEstrategicoListComponent } from './projeto-por-produto-estrategico-list.component';

describe('ProjetoPorProdutoEstrategicoListComponent', () => {
  let component: ProjetoPorProdutoEstrategicoListComponent;
  let fixture: ComponentFixture<ProjetoPorProdutoEstrategicoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoPorProdutoEstrategicoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoPorProdutoEstrategicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
