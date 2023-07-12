import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';
import { GerProj_IteracaoEntregaApi } from '../shared/sdk';

@Component({
  selector: 'app-iteracao-entrega-edita',
  templateUrl: './iteracao-entrega-edita.component.html',
  styleUrls: ['./iteracao-entrega-edita.component.css']
})
export class IteracaoEntregaEditaComponent extends BaseEditComponent {


  criaItem() {
    throw new Error('Method not implemented.');
  }

  constructor(protected dialog:MatDialogRef<IteracaoEntregaEditaComponent>, 
        @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: GerProj_IteracaoEntregaApi) { 
          super(dialog,data,servico)
        }


  onSubmit(): void {
      delete this.item['tempoRestante'];
      super.onSubmit();
  }


}
