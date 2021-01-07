import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';

import { MercadoEscala, MercadoEscalaApi } from '../shared/sdk';

@Component({
  selector: 'app-mercado-escala-edit',
  templateUrl: './mercado-escala-edit.component.html',
  styleUrls: ['./mercado-escala-edit.component.css']
})
export class MercadoEscalaEditComponent extends BaseEditComponent {
  criaItem() {
    return new MercadoEscala();
  }

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: MercadoEscalaApi,
  ) {
    super(dialogRef, data, servico);
  }

 
}
