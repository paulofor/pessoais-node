import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-component/base-edit-component';
import { ContaApi, Conta } from '../shared/sdk';

@Component({
  selector: 'app-conta-edit',
  templateUrl: './conta-edit.component.html',
  styleUrls: ['./conta-edit.component.css']
})
export class ContaEditComponent extends BaseEditComponent {




  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: ContaApi,
    
  ) {
    super(dialogRef,data,servico)
  }

  criaItem() {
    let item:Conta = new Conta();
    
    return item;
  }
  
 

  

}
