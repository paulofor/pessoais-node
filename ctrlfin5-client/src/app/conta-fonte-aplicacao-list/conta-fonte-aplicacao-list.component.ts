import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { BaseListComponent } from '../base-component/base-list-component';
import { ContaEditComponent } from '../conta-edit/conta-edit.component';
import { ContaApi } from '../shared/sdk';

@Component({
  selector: 'app-conta-fonte-aplicacao-list',
  templateUrl: './conta-fonte-aplicacao-list.component.html',
  styleUrls: ['./conta-fonte-aplicacao-list.component.css']
})
export class ContaFonteAplicacaoListComponent extends BaseListComponent {

  constructor(protected dialog: MatDialog, protected srv:ContaApi,public router: Router) { 
    super(dialog,srv)
  }

  getComponente() {
    return ContaEditComponent;
  }

 

  getFiltro() {
    return {
      'where' : { 'and' : [ {'fonte' : 'S'} , {'aplicacao' : 'S'} , {'ativo' : 'S'} ]},
      'order' : 'nomeConta'
    }
  }

 

}
