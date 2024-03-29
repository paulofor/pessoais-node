import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEscolhaComponent } from '../base-escolha/base-escolha.component';
import { RendaPassivaApi, RendaPassivaProjeto, RendaPassivaProjetoApi } from '../shared/sdk';

@Component({
  selector: 'app-renda-passiva-projeto-escolha',
  templateUrl: './renda-passiva-projeto-escolha.component.html',
  styleUrls: ['./renda-passiva-projeto-escolha.component.css']
})
export class RendaPassivaProjetoEscolhaComponent extends BaseEscolhaComponent {

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected srvEscolha: RendaPassivaApi,protected srvRel: RendaPassivaProjetoApi
  ) {
    super(dialogRef,data,srvEscolha, srvRel);
  }

 
  insereItem(item) {
    console.log('insereItem: ' , item);
    let novo:RendaPassivaProjeto = new RendaPassivaProjeto();
    novo.gerProjProjetopmbokId = this.item.id;
    novo.rendaPassivaId = item.id;
    this.srvRel.create(novo)
      .subscribe((result) => {
        this.carregaEscolhas();
      })
  }
}
