import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';

import { PossibilidadeReceita, PossibilidadeReceitaApi } from '../shared/sdk';

@Component({
  selector: 'app-possibilidade-receita-edit',
  templateUrl: './possibilidade-receita-edit.component.html',
  styleUrls: ['./possibilidade-receita-edit.component.css']
})
export class PossibilidadeReceitaEditComponent extends BaseEditComponent{


  criaItem() {
    return new PossibilidadeReceita()
  }

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: PossibilidadeReceitaApi,
  ) {
    super(dialogRef, data, servico)
  }

 

}
