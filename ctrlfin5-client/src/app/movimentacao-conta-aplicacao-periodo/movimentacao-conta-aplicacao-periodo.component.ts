import { Component, OnInit } from '@angular/core';
import { BaseListItemComponent } from '../base-component/base-list-item-component';
import { MovimentacaoContaPeriodoComponent } from '../movimentacao-conta-periodo/movimentacao-conta-periodo.component';

@Component({
  selector: 'app-movimentacao-conta-aplicacao-periodo',
  templateUrl: './movimentacao-conta-aplicacao-periodo.component.html',
  styleUrls: ['./movimentacao-conta-aplicacao-periodo.component.css']
})
export class MovimentacaoContaAplicacaoPeriodoComponent extends MovimentacaoContaPeriodoComponent {


  getFiltroLista(idConta, idPeriodo) {
    return {
      'where' : { 'or' : [
          {'and' : [{'id_periodo_f' : idPeriodo} , {'id_conta_f' : idConta }]} , 
          {'and' : [{'id_periodo_a' : idPeriodo} , {'id_conta_a' : idConta }]}
        ] },
      'order' : ['id_periodo_a desc', 'dia desc'],
      'include' : ['contaAplicacao' , 'contaFonte' , 'periodoAplicacao' , 'periodoAplicacao']
    }
  }
}
