import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseLoopBackApi } from '../shared/sdk';

@Component({
  selector: 'app-base-edit',
  templateUrl: './base-edit.component.html',
  styleUrls: ['./base-edit.component.css']
})
export abstract class BaseEditComponent implements OnInit {


  item: any;
  origem: any;

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: BaseLoopBackApi,
  ) {
  }


  ngOnInit() {
    this.montaCombos();
    console.log("Parametro entrada", this.data);
    if (this.data.origem) {
      this.origem = this.data.origem;
    }
    if (!this.data.item) {
      console.log("fluxo nova");
      this.item = this.criaItem();
    } else {
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item:', JSON.stringify(this.item));
    }
  }

  onSubmit() {
    console.log('Model: ' + JSON.stringify(this.item));
    this.servico.upsert(this.item, (err, obj) => {
      console.log("Erro:" + err.message);
    }).subscribe((e: any) => {
      console.log(JSON.stringify(e));
      this.closeDialog();
    });

  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  abstract criaItem();

  montaCombos() {

  }
}

