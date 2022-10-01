import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseEditComponent } from '../base-component/base-edit-component';
import { EstimativaMesApi } from '../shared/sdk';

@Component({
  selector: 'app-estimativa-edita',
  templateUrl: './estimativa-edita.component.html',
  styleUrls: ['./estimativa-edita.component.css']
})
export class EstimativaEditaComponent extends BaseEditComponent {




  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: EstimativaMesApi,
    
  ) {
    super(dialogRef,data,servico)
  }

  
  
  onSubmit() {
    this.preSubmit();
    console.log('Submit(EstimativaEditaComponent):' , this.item.estimativaMesId);
    this.servico.AlteraValor(this.item.estimativaMesId, this.item.valorEstimativa)
      .subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.closeDialog();
      });

  }

  

}
