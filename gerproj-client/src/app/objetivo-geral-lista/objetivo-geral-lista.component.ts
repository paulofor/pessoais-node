import { Component, OnInit } from '@angular/core';
import { ObjetivoGeralApi } from '../shared/sdk';
import { ObjetivoGeralEditaComponent } from '../objetivo-geral-edita/objetivo-geral-edita.component';
import { BaseListComponent } from '../base-list/base-list.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EscolheProjetoParaObjetivoComponent } from '../escolhe-projeto-para-objetivo/escolhe-projeto-para-objetivo.component';

@Component({
  selector: 'app-objetivo-geral-lista',
  templateUrl: './objetivo-geral-lista.component.html',
  styleUrls: ['./objetivo-geral-lista.component.css']
})
export class ObjetivoGeralListaComponent extends BaseListComponent {



  constructor(protected dialog: MatDialog, protected srv: ObjetivoGeralApi, private route: ActivatedRoute) {
    super(dialog, srv);
  }

  toggleVisibility(id: number) {
    const element = document.getElementById('tela' + id);
    if (element) {
      if (element.style.display === 'none') {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
  }

  adiciona(atual) {
    console.log('Pai:', atual);
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaTela();
    });
    let componente = this.getComponente();
    this.dialog.open(componente, {
      width: '800px',
      data: {
        origem: atual
      }
    });
  }

  getFiltro(): {} {
    return {
      'where' : {'objetivoGeralId' : 0},
      'include': { 'relation': 'objetivoGerals' , 'scope' : {
        'include' : [
          {'relation' : 'objetivoGerals', 'scope' : {'include' : {'relation' : 'objetivoProjetos' , 'scope' : {'include' : 'gerProjProjetopmbok'}}}},
          {'relation' : 'objetivoProjetos' , 'scope' : {'include' : 'gerProjProjetopmbok'}}
        ]
      } }
    }
  }

  getComponente() {
    return ObjetivoGeralEditaComponent;
  }

  projetos(origem) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaTela();
    });
    this.dialog.open(EscolheProjetoParaObjetivoComponent, {
      width: '800px',
      data: {
        origem: origem
      }
    });
  }

}