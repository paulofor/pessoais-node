import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';
import { GerProj_ProjetoPmbokApi, GerProj_GrupoProjetoApi, GerProj_TempoTarefaApi, GerProj_TempoTarefa } from '../shared/sdk';

@Component({
  selector: 'app-execucao-dia-edita-tempo',
  templateUrl: './execucao-dia-edita-tempo.component.html',
  styleUrls: ['./execucao-dia-edita-tempo.component.css']
})
export class ExecucaoDiaEditaTempoComponent extends BaseEditComponent {



  constructor(protected dialog: MatDialogRef<ExecucaoDiaEditaTempoComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: GerProj_TempoTarefaApi) {
    super(dialog, data, servico)
  }




  criaItem() {
    return new GerProj_TempoTarefa();
  }



}
