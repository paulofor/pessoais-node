import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { BaseListComponent } from '../base-component/base-list-component';
import { PeriodoApi } from '../shared/sdk';

@Component({
  selector: 'app-total-meses',
  templateUrl: './total-meses.component.html',
  styleUrls: ['./total-meses.component.css']
})
export class TotalMesesComponent extends BaseListComponent {

  maiorValorGrafico = 0;

  constructor(protected dialog: MatDialog, protected srv:PeriodoApi,public router: Router) { 
    super(dialog,srv)
  }

 

  
  carregaTela() {
    this.srv.TotalPeriodoAplicacao(12)
    .subscribe((result:any[]) => {
        console.log('result: ' , result);
        this.listaBase = result;
        this.atualizaMaiorValorGrafico();
    })
  }
 
  getValorFormatado(item) {
    if (!item.total) {
      return "-"
    } else {
      return item.total.toFixed(2);;
    }
  }

  getAlturaBarra(item) {
    if (!item.total || !this.maiorValorGrafico) {
      return '0%';
    }
    return ((item.total / this.maiorValorGrafico) * 100) + '%';
  }

  private atualizaMaiorValorGrafico() {
    this.maiorValorGrafico = 0;
    this.listaBase.forEach(item => {
      if (item.total && item.total > this.maiorValorGrafico) {
        this.maiorValorGrafico = item.total;
      }
    });
  }

}
