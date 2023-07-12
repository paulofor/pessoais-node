import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from '../base-list/base-list.component';
import { EntregaProjetoFotoApi } from '../shared/sdk';

@Component({
  selector: 'app-entrega-projeto-foto-atual',
  templateUrl: './entrega-projeto-foto-atual.component.html',
  styleUrls: ['./entrega-projeto-foto-atual.component.css']
})
export class EntregaProjetoFotoAtualComponent extends BaseListComponent {

  constructor(protected dialog: MatDialog, protected srv:EntregaProjetoFotoApi, private route: ActivatedRoute) {
    super(dialog,srv);
  }
 

  getFiltro() {
      return { 'order' : 'iteracaoDataPrevisao asc' , 'where' : {'versaoAtual' : 1}}
  }
 

}
