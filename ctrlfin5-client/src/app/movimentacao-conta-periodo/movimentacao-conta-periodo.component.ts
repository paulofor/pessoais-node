import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseListComponent } from '../base-component/base-list-component';
import { BaseListItemComponent } from '../base-component/base-list-item-component';
import { MovimentacaoEditComponent } from '../movimentacao-edit/movimentacao-edit.component';
import { Conta, ContaApi, Movimentacao, MovimentacaoApi, Periodo, PeriodoApi } from '../shared/sdk';

@Component({
  selector: 'app-movimentacao-conta-periodo',
  templateUrl: './movimentacao-conta-periodo.component.html',
  styleUrls: ['./movimentacao-conta-periodo.component.css']
})
export class MovimentacaoContaPeriodoComponent extends BaseListItemComponent {

  saldoMes: number;
  periodo: Periodo;
  totalAplicacao: number;
  totalFonte: number;

  confirma(item: any) {
    if (item.confirmada=='S') return 'confirmada'
    else return 'nao-confirmada';
  }

  extraiListaBase(item: any) {
    this.route.params.subscribe((params: Params) => {
          let idPeriodo = params['idPeriodo'];
          console.log('idPeriodo:' , idPeriodo);
          this.srvMovimentacao.find(this.getFiltroLista(item.id,idPeriodo))
            .subscribe((resultado) => {
              console.log('ListaMovimentacao:' , resultado);
              this.listaBase = resultado;
              this.calculaSaldoMes();
              this.carregaPeriodo(idPeriodo);
            })
        })
  }

  carregaPeriodo(idPeriodo) {
    this.srvPeriodo.findById(idPeriodo)
      .subscribe((result:Periodo) => {
        this.periodo = result;
      })
  }

  calculaSaldoMes() {
    let saldo = 0;
    let totalAplicacao = 0;
    let totalFonte = 0;
    for (let i=0;i<this.listaBase.length;i++) {
      let movimentacao = this.listaBase[i];
      if (movimentacao.id_conta_a==this.itemBase.id) {
        saldo-=movimentacao.valor;
        totalAplicacao=movimentacao.valor;
      } 
        
      if (movimentacao.id_conta_f==this.itemBase.id) {
        saldo+=movimentacao.valor;
        totalFonte+=movimentacao.valor;
      }
        
    }
    this.saldoMes = saldo;
    this.totalAplicacao = totalAplicacao;
    this.totalFonte = totalFonte;
  }

  constructor(public route: ActivatedRoute,protected dialog: MatDialog, protected srvMovimentacao:MovimentacaoApi, 
    public srv:ContaApi, private srvPeriodo:PeriodoApi, public router: Router) { 
    super(dialog,srv, route, router);
  }

 



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
  


  criaItem() {
    return new Movimentacao();
  }

  getComponente() {
    return MovimentacaoEditComponent;
  }

 

}
 
