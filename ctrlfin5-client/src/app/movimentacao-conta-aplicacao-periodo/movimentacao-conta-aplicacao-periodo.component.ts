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
      'where' : { 'and' : [
          {'or' : [{'id_periodo_a' : idPeriodo }]} , 
          {'or' : [{'id_conta_a' : idConta }]}
        ] },
      'order' : ['id_periodo_a', 'dia'],
      'include' : ['contaAplicacao' , 'contaFonte' , 'periodoAplicacao' , 'periodoAplicacao']
    }
  }

}
