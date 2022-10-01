import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BaseListComponent } from '../base-component/base-list-component';
import { EstimativaEditaComponent } from '../estimativa-edita/estimativa-edita.component';
import { EstimativaMesApi, EstimativaMes, Periodo, PeriodoApi, ContaApi } from '../shared/sdk';

@Component({
  selector: 'app-estimativa-mes',
  templateUrl: './estimativa-mes.component.html',
  styleUrls: ['./estimativa-mes.component.css']
})
export class EstimativaMesComponent extends BaseListComponent {


  proximo: Periodo;
  totalMes1: number;
  totalMes2: number;
  totalMes3: number;
  totalEstimativa: number;

  constructor(protected dialog: MatDialog, protected srv:ContaApi,public router: Router, 
        private srvPeriodo:PeriodoApi, private srvEstimativa:EstimativaMesApi)
   { 
    super(dialog,srv)
  }

  criaItem() {
    return new EstimativaMes();
  }

  preCarregaTela(): Observable<any> {
    this.srvPeriodo.ObtemProximo()
      .subscribe((result:Periodo) => {
        this.proximo = result;
        
      });
    return of(this.proximo);
  }

  getComponente() {
    return EstimativaEditaComponent;
  }
  
  geraEstimativa() {
    this.srvEstimativa.CriaEstimativaPeriodo(this.proximo.id)
      .subscribe((result) => {
        this.carregaTela();
      })
  }

  posCarregaLista() {
    this.totalMes1 = 0;
    this.totalMes2 = 0;
    this.totalMes3 = 0;
    this.totalEstimativa = 0;
    this.listaBase.forEach((item) => {
      this.totalMes1 += item.total1;
      this.totalMes2 += item.total2;
      this.totalMes3 += item.total3;
      this.totalEstimativa += item.valorEstimativa;
    })
  }


  carregaTela() {

    this.srv.ListaParaEstimativa()
    .subscribe((result:any[]) => {
        console.log('result: ' , result);
        this.listaBase = result;
        this.posCarregaLista();
    })
}



 

}


