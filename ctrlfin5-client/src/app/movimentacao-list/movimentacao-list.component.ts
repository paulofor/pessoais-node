import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BaseListComponent } from '../base-component/base-list-component';
import { MovimentacaoEditComponent } from '../movimentacao-edit/movimentacao-edit.component';
import { MovimentacaoApi, Movimentacao } from '../shared/sdk';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent extends BaseListComponent {

  constructor(protected dialog: MatDialog, protected srv:MovimentacaoApi,public router: Router) { 
    super(dialog,srv)
  }

  criaItem() {
    return new Movimentacao();
  }

  getComponente() {
    return MovimentacaoEditComponent;
  }

  getFiltro() {
    return {
      'where' : {'confirmada' : 'N'},
      'order' : ['id_periodo_a desc','dia desc'],
      'limit' : 20,
      'include' : [
        {'relation' : 'contaAplicacao' },
        {'relation' : 'contaFonte'},
        {'relation' : 'periodoAplicacao'},
        {'relation' : 'periodoFonte'}
      ]
    }
  }

  getValorFormatado(item) {
    if (!item.valor) {
      return "-"
    } else {
      return item.valor.toFixed(2);;
    }
  } 

  confirmaItem(item) {
    console.log('item' , item);
    this.srv.ConfirmaPorId(item.id)
      .subscribe((result) => {
        this.carregaTela();
      })
  }
 

}
