import { Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class BaseEscolhaComponent implements OnInit  {

    item: any;
    listaEscolha: any[];

    constructor(protected dialogRef: MatDialogRef<any>
        , @Inject(MAT_DIALOG_DATA) protected data: any, protected srvEscolha: any,
      ) {
      }

    carregaEscolhidos() {
        this.srvEscolha.find()
            .subscribe((result) => {
                this.listaEscolha = result;
            })
    }

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

}