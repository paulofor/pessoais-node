import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseLoopBackApi } from '../shared/sdk';

@Component({
  selector: 'app-base-escolha',
  templateUrl: './base-escolha.component.html',
  styleUrls: ['./base-escolha.component.css']
})
export class BaseEscolhaComponent implements OnInit {

  item: any;
  listaEscolha: any[];
  listaEscolhidos: any[];

  constructor(protected dialogRef: MatDialogRef<any>
      , @Inject(MAT_DIALOG_DATA) protected data: any, protected srvEscolha: BaseLoopBackApi, protected srvRelacionamento: BaseLoopBackApi
    ) {
    }

  carregaEscolhas() {
      this.srvEscolha.find()
          .subscribe((result) => {
              this.listaEscolha = result;
          })
  }
  carregaEscolhidas() {
    let filtro = {'where' : {'gerProjProjetopmbokId' : this.item.id } , 'include' : 'rendaPassiva'}
    this.srvRelacionamento.find(filtro)
      .subscribe((result) => {
        this.listaEscolhidos = result;
      })
  }

  ngOnInit(): void {
    this.carregaEscolhas();
    
    console.log('escolha.data:' , this.data);
    if (this.data.item) {
      this.item = this.data.item;
      console.log('Item:' , this.item);
      this.carregaEscolhidas();
    }
  }

}
