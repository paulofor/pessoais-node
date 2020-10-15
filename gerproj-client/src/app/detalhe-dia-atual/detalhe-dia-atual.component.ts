import { Component, OnInit } from '@angular/core';
import { GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-detalhe-dia-atual',
  templateUrl: './detalhe-dia-atual.component.html',
  styleUrls: ['./detalhe-dia-atual.component.css']
})
export class DetalheDiaAtualComponent implements OnInit {

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
