import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';

import { OportunidadeMacroeconomica, OportunidadeMacroeconomicaApi } from '../shared/sdk';

@Component({
  selector: 'app-oportunidade-macroeconomica-edit',
  templateUrl: './oportunidade-macroeconomica-edit.component.html',
  styleUrls: ['./oportunidade-macroeconomica-edit.component.css']
})
export class OportunidadeMacroeconomicaEditComponent extends BaseEditComponent {
 
  criaItem() {
    return new OportunidadeMacroeconomica();
  }

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: OportunidadeMacroeconomicaApi,
  ) {
    super(dialogRef,data,servico);
  }

  

}
