import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEscolhaComponent } from '../base-escolha/base-escolha.component';
import { BaseLoopBackApi, GerProj_GrupoProjetoApi, RendaPassivaProjetoApi } from '../shared/sdk';


@Component({
  selector: 'app-grupo-projeto-escolha',
  templateUrl: './grupo-projeto-escolha.component.html',
  styleUrls: ['./grupo-projeto-escolha.component.css']
})
export class GrupoProjetoEscolhaComponent extends BaseEscolhaComponent {

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected srvEscolha: GerProj_GrupoProjetoApi,
    protected srvRelac : RendaPassivaProjetoApi
  ) {
    super(dialogRef, data, srvEscolha, srvRelac);
  }

 

}
