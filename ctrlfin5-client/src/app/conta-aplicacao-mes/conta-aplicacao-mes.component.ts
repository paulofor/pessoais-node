import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseListItemComponent } from '../base-component/base-list-item-component';
import { MovimentacaoEditComponent } from '../movimentacao-edit/movimentacao-edit.component';
import { ContaApi, Movimentacao, PeriodoApi } from '../shared/sdk';

@Component({
  selector: 'app-conta-aplicacao-mes',
  templateUrl: './conta-aplicacao-mes.component.html',
  styleUrls: ['./conta-aplicacao-mes.component.css']
})
export class ContaAplicacaoMesComponent extends BaseListItemComponent {

  totalMes: number;

  extraiListaBase(item: any) {
    this.srvConta.TotaisAplicacaoPorPeriodo(item.id)
      .subscribe((result:any) => {
        console.log('result-ListaBase: ' , result);
        this.listaBase = result;
        let somaMes = 0;
        for (let i=0;i<result.length;i++) {
          somaMes += result[i].valor;
          console.log('somaMes:' , somaMes);
        }
        this.totalMes = somaMes;
      })
  }

  constructor(protected dialog: MatDialog, protected srv:PeriodoApi, 
      protected route: ActivatedRoute, protected router: Router, private srvConta:ContaApi) { 
    super(dialog,srv,route,router);
  }

  criaItem() {
    return new Movimentacao();
  }

  getComponente() {
    return MovimentacaoEditComponent;
  }

}
