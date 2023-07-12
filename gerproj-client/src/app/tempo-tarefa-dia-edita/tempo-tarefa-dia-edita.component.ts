import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';
import { GerProj_TempoTarefaApi, RendaPassivaApi } from '../shared/sdk';

@Component({
  selector: 'app-tempo-tarefa-dia-edita',
  templateUrl: './tempo-tarefa-dia-edita.component.html',
  styleUrls: ['./tempo-tarefa-dia-edita.component.css']
})
export class TempoTarefaDiaEditaComponent extends BaseEditComponent {

  criaItem() {
    throw new Error('Method not implemented.');
  }

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: GerProj_TempoTarefaApi,
  ) {
    super(dialogRef, data, servico);
  }



}
