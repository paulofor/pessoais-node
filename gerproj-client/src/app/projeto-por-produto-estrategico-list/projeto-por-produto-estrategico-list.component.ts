import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BaseItemComListaComponent } from '../base-item-com-lista/base-item-com-lista.component';
import { ProjetoEditaComponent } from '../projeto-edita/projeto-edita.component';

import { GerProj_ProdutoEstrategicoApi, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-projeto-por-produto-estrategico-list',
  templateUrl: './projeto-por-produto-estrategico-list.component.html',
  styleUrls: ['./projeto-por-produto-estrategico-list.component.css']
})
export class ProjetoPorProdutoEstrategicoListComponent extends BaseItemComListaComponent {

  constructor(protected srv:GerProj_ProdutoEstrategicoApi, protected dialog: MatDialog, protected router: ActivatedRoute, private srvProjeto:GerProj_ProjetoPmbokApi) {
    super(srv,router);
  }

  getFiltro() {
    return {'include' : {'relation' : 'gerProjProjetopmboks' , 'scope' : {
      'order' : ['ativo desc','segundoConsumido desc']
    }}}
  }

  setListaBase(): void {
    this.listaBase = this.principal.gerProjProjetopmboks;
  }

  ligaDesliga(item) {
    this.srvProjeto.LigaDesligaProjeto(item.id)
      .subscribe((result) => {
        this.carregaTela();
      })
  }


  edita(edicao?) {
    console.log('BaseList.edita (data.item=' + edicao + ')');
    this.dialog.afterAllClosed.subscribe(result => {
        this.carregaTela();
    });
    let componente = this.getComponente();
    console.log('componente:' , componente)
    this.dialog.open(componente, {
        width: '800px',
        data: edicao
    });
  }

  getComponente() {
    return ProjetoEditaComponent;
  }

}
