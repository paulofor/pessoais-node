import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseLoopBackApi } from '../shared/sdk';

@Component({
  selector: 'app-base-item-com-lista',
  templateUrl: './base-item-com-lista.component.html',
  styleUrls: ['./base-item-com-lista.component.css']
})
export class BaseItemComListaComponent implements OnInit {

  listaBase: any[];
  principal: any;
  idPrincipal: number;

  constructor(protected srv:BaseLoopBackApi, protected router: ActivatedRoute) { }


  ngOnInit() {
      this.preCarregaTela();
      this.carregaTela();
  }

  preCarregaTela() {}
  posCarregaLista() {}

  carregaTela() {
      this.router.params.subscribe((params) => {
          this.idPrincipal = params['id'];
          this.srv.findById(this.idPrincipal, this.getFiltro())
            .subscribe((result: any) => {
              this.principal = result;
              console.log('principal:' , this.principal);
              this.setListaBase();
            })
        })
      
  }

  setListaBase() {};

  getFiltro() {
      return {}
  }

}