import { Component, OnInit } from '@angular/core';
import { GerProj_ProjetoPmbokApi, GerProj_ProjetoPmbok } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseListComponent } from '../base-list/base-list.component';
import { MatDialog } from '@angular/material/dialog';
import { DetalheProjetoEditaComponent } from '../detalhe-projeto-edita/detalhe-projeto-edita.component';
import { GrupoProjetoEscolhaComponent } from '../grupo-projeto-escolha/grupo-projeto-escolha.component';
import { RendaPassivaProjetoEscolhaComponent } from '../renda-passiva-projeto-escolha/renda-passiva-projeto-escolha.component';


@Component({
  selector: 'app-projeto-ano',
  templateUrl: './projeto-ano.component.html',
  styleUrls: ['./projeto-ano.component.css']
})
export class ProjetoAnoComponent extends BaseListComponent implements OnInit {

  ano: number;

  constructor(protected dialog: MatDialog, protected srv:GerProj_ProjetoPmbokApi, private route: ActivatedRoute) {
    super(dialog,srv);
  }
 

  carregaTela() {
    this.route.params.subscribe((params: Params) => {
      this.ano = params['id'];
      this.srv.TempoAno(this.ano)
      .subscribe((lista:GerProj_ProjetoPmbok[]) => {
        this.listaBase = lista;
        console.log('Lista Projeto:' , this.listaBase);
      })

    })
  }

  getComponente() {
    return DetalheProjetoEditaComponent;
  }

  getDialogo1() {
    return GrupoProjetoEscolhaComponent;
  }
  getDialogo2() {
    return RendaPassivaProjetoEscolhaComponent;
  }
}
