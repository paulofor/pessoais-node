import { Component, OnInit } from '@angular/core';
import { GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-programacao-semanal',
  templateUrl: './programacao-semanal.component.html',
  styleUrls: ['./programacao-semanal.component.css']
})
export class ProgramacaoSemanalComponent implements OnInit {

  lista: GerProj_ProjetoPmbok[];

  constructor(private srv:GerProj_ProjetoPmbokApi) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srv.ProgramacaoSemanal()
      .subscribe((result:GerProj_ProjetoPmbok[]) => {
        console.log('Resultado:', result);
        this.lista = result;
      })
  }

}
