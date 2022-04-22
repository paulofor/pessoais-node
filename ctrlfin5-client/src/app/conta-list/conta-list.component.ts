import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { BaseListComponent } from '../base-component/base-list-component';
import { ContaEditComponent } from '../conta-edit/conta-edit.component';
import { Conta, ContaApi } from '../shared/sdk';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.css']
})
export class ContaListComponent extends BaseListComponent {

  constructor(protected dialog: MatDialog, protected srv:ContaApi,public router: Router) { 
    super(dialog,srv)
  }

  criaItem() {
    return new Conta();
  }

  getComponente() {
    return ContaEditComponent;
  }

  getFiltro() {
    return {
      'order' : 'nomeConta'
    }
  }

  ativo(item) {
    if (item.ativa=='S') return 'ativo'
    else return 'inativo'
  }


  carregaTela() {
    console.log('Entrou em obtem tela');
    this.srv.find(this.getFiltro())
    .subscribe((result:Conta[]) => {
        console.log('ContaListComponent: ' , result);
        this.listaBase = result;
        this.posCarregaLista();
    })
}
}
