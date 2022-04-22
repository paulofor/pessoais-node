import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MovimentacaoEditComponent } from '../movimentacao-edit/movimentacao-edit.component';
import { Movimentacao, MovimentacaoApi } from '../shared/sdk';

@Component({
  selector: 'app-pesquisa-dia',
  templateUrl: './pesquisa-dia.component.html',
  styleUrls: ['./pesquisa-dia.component.css']
})
export class PesquisaDiaComponent implements OnInit {

  data:Date
  listaMovimentacao: Movimentacao[];

  constructor(protected dialog: MatDialog,private srv:MovimentacaoApi) {

   }

  ngOnInit() {
  }

  onSubmit() {
    console.log('data:' , this.data);
    let mes = this.data.getMonth() + 1;
    let dia = this.data.getDate();
    let ano = this.data.getFullYear();
    console.log('dia' , dia);
    console.log('mes' , mes);
    console.log('ano' , ano);
    this.srv.ObtemPorDia(dia,mes,ano)
      .subscribe((resultado) => {
        this.listaMovimentacao = resultado;
      })
  }

  criaItem() {
    return new Movimentacao();
  }

  getComponente() {
    return MovimentacaoEditComponent;
  }

  edita(edicao?) {
    this.dialog.afterAllClosed.subscribe(result => {
        this.onSubmit();
    });
    this.dialog.open(this.getComponente(), {
        width: '800px',
        data: {
            item: edicao
        }
    });
}
}
