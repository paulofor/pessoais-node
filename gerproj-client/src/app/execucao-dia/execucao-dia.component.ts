import { Component, OnInit } from '@angular/core';
import { GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-execucao-dia',
  templateUrl: './execucao-dia.component.html',
  styleUrls: ['./execucao-dia.component.css']
})
export class ExecucaoDiaComponent implements OnInit {

  lista: GerProj_ProjetoPmbok[];

  constructor(private srv:GerProj_ProjetoPmbokApi) { 

  }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srv.DetalheDia()
      .subscribe((result:GerProj_ProjetoPmbok[]) => {
        console.log('ResultDia:' , result);
        this.lista = result;
      })
  }

}
