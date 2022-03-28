import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { BaseListComponent } from '../base-component/base-list-component';
import { MovimentacaoEditComponent } from '../movimentacao-edit/movimentacao-edit.component';
import { MovimentacaoApi, Movimentacao } from '../shared/sdk';

@Component({
  selector: 'app-movimentacao-aberta',
  templateUrl: './movimentacao-aberta.component.html',
  styleUrls: ['./movimentacao-aberta.component.css']
})
export class MovimentacaoAbertaComponent  extends BaseListComponent {

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

}