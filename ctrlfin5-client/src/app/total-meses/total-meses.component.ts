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

  constructor(protected dialog: MatDialog, protected srv:PeriodoApi,public router: Router) { 
    super(dialog,srv)
  }

 

  
  carregaTela() {
    this.srv.TotalPeriodoAplicacao(6)
    .subscribe((result:any[]) => {
        console.log('result: ' , result);
        this.listaBase = result;
    })
  }
 
  getValorFormatado(item) {
    if (!item.total) {
      return "-"
    } else {
      return item.total.toFixed(2);;
    }
  }

}
