import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';
import { RendaPassiva, RendaPassivaApi } from '../shared/sdk';

@Component({
  selector: 'app-renda-passiva-edit',
  templateUrl: './renda-passiva-edit.component.html',
  styleUrls: ['./renda-passiva-edit.component.css']
})
export class RendaPassivaEditComponent extends BaseEditComponent {

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: RendaPassivaApi,
  ) {
    super(dialogRef, data, servico);
  }

  criaItem() {
    return new RendaPassiva();
  }

}
