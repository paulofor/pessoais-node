import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseLoopBackApi } from '../shared/sdk';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.css']
})
export class BaseListComponent implements OnInit {

  listaBase: any[];

  constructor(protected dialog: MatDialog, protected srv:BaseLoopBackApi) { }


  ngOnInit() {
     this.carregaTela();
  }

  carregaTela() {
      this.srv.find(this.getFiltro())
      .subscribe((result:any[]) => {
          console.log('result: ' , result);
          this.listaBase = result;
      })
  }

  edita(edicao?) {
      console.log('BaseList.edita (data.item=' + edicao + ')');
      this.dialog.afterAllClosed.subscribe(result => {
        this.carregaTela();
    });
    let componente = this.getComponente();
    console.log('componente:' , componente)
    this.dialog.open(componente, {
        width: '800px',
        data: {
            item: edicao
        }
    });
     
  }

  dialogo1(dados) {
      //console.log(this);
      console.log('BaseList.dialogo1(data=' , dados, ')');
      this.dialog.afterAllClosed.subscribe(result => {
          this.carregaTela();
      });
      let componente = this.getDialogo1();
      console.log('componenteDialogo1:' , componente);
      this.dialog.open(componente, {
          width: '800px',
          data: dados
      });
  }
  getDialogo1() : any {

  }

  dialogo2(dados) {
    console.log('BaseList.dialogo2(data=' , dados, ')');
    this.dialog.afterAllClosed.subscribe(result => {
          this.carregaTela();
      });
      let componente = this.getDialogo2();
      console.log('componenteDialogo2:' , componente);
      this.dialog.open(componente, {
          width: '800px',
          data: dados
      });
  }
  getDialogo2() : any {

  }


  getComponente():any {}

  getFiltro() {
      return {}
  }

}
