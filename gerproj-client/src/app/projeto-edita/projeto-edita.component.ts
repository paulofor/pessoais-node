import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';
import { GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-projeto-edita',
  templateUrl: './projeto-edita.component.html',
  styleUrls: ['./projeto-edita.component.css']
})
export class ProjetoEditaComponent extends BaseEditComponent {

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: GerProj_ProjetoPmbokApi,
  ) {
    super(dialogRef, data, servico);
  }

  criaItem() {
    let novo =  new GerProj_ProjetoPmbok();
    novo.id_produto_estrategico_ra = this.origem.id;
    novo.usuarioId = 1;
    novo.ativo = 'N';
    return novo;
  }

}
