import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BaseListComponent } from '../base-component/base-list-component';
import { MovimentacaoEditComponent } from '../movimentacao-edit/movimentacao-edit.component';
import { MovimentacaoApi, Movimentacao, PeriodoApi, Conta, ContaApi } from '../shared/sdk';

@Component({
  selector: 'app-conta-hist',
  templateUrl: './conta-hist.component.html',
  styleUrls: ['./conta-hist.component.css']
})
export class ContaHistComponent extends BaseListComponent {

  conta: Conta;

  constructor(private route: ActivatedRoute,protected dialog: MatDialog, protected srv:PeriodoApi, 
      private srvConta:ContaApi, public router: Router) { 
    super(dialog,srv)
  }


  carregaTela() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.srvConta.findById(id)
        .subscribe((result: Conta) => {
          this.conta = result;
          this.srv.SaldoPorConta(this.conta.id,12)
            .subscribe((result:any[]) => {
              this.listaBase = result;
              console.log('ListaBase' , this.listaBase);
              this.posCarregaLista();
            })
        });
    })
  }

  criaItem() {
    return new Movimentacao();
  }

  getComponente() {
    return MovimentacaoEditComponent;
  }

 

}
 
