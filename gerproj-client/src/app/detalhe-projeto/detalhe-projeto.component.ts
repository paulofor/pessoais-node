import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { DetalheProjetoEditaComponent } from '../detalhe-projeto-edita/detalhe-projeto-edita.component';
import { EntregaEditaComponent } from '../entrega-edita/entrega-edita.component';
import { IteracaoEntregaEditaComponent } from '../iteracao-entrega-edita/iteracao-entrega-edita.component';
import { GerProj_EntregaProjetoApi, GerProj_IteracaoEntregaApi, GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-detalhe-projeto',
  templateUrl: './detalhe-projeto.component.html',
  styleUrls: ['./detalhe-projeto.component.css']
})
export class DetalheProjetoComponent implements OnInit {

  item: GerProj_ProjetoPmbok;
  id: number;

  constructor(private srv: GerProj_ProjetoPmbokApi, private router: ActivatedRoute, private dialog:MatDialog, 
    private srvEntrega:GerProj_EntregaProjetoApi, private srvIteracao:GerProj_IteracaoEntregaApi) { }

  ngOnInit() {
    this.router.params.subscribe((params:Params) => {
      this.id = params['id'];
      this.carregaTela();
    })
  }

  ligaDesliga(id) {
    this.srvIteracao.LigaDesliga(id)
      .subscribe((result) => {
        this.carregaTela();
      })
  }
  sobeItem(entrega) {
    console.log('Entrega sobe: ' , entrega);
    this.srvEntrega.SobeItem(entrega.id)
      .subscribe((result) => {
        this.carregaTela();
      })
  }
  desceItem(entrega) {
    console.log('Entrega desce: ' , entrega);
    this.srvEntrega.DesceItem(entrega.id)
      .subscribe((result) => {
        this.carregaTela();
      })
  }

  finaliza(idEntrega) {
    this.srvEntrega.FechaEntrega(idEntrega)
      .subscribe((result) => {
        this.carregaTela();
      })
  }


  editaEntrega(entrega?) {
    this.dialog.afterAllClosed.subscribe(result => {
      this.carregaTela();
    });
    let componente = EntregaEditaComponent;
    console.log('componente:' , componente)
    this.dialog.open(componente, {
      width: '800px',
      data: {
          item: entrega,
          projeto: this.item,
      }
    });
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
  getComponente() {
    return IteracaoEntregaEditaComponent;
  }

  carregaTela() {
    let filtro = { 
      'include' : [
        'gerProjProdutoestrategico' ,
        'grupoProjeto' , 
        {
          'relation' : 'gerProjEntregaprojetos' , 'scope' : {
            'include' : 'gerProjIteracaoentregas',
            'order' : 'ordenacao desc'
          }
        }
      ]
    }
    this.srv.findById(this.id, filtro)
    .subscribe((result:GerProj_ProjetoPmbok) => {
      console.log('result:' , result);
      this.item = result;
      for (let i=0;i<this.item.gerProjEntregaprojetos.length;i++) {
        if (this.item.gerProjEntregaprojetos[i].gerProjIteracaoentregas[0].concluida=='N') {
          this.item.gerProjEntregaprojetos[i]['atual'] = true;
          if (i>0) {
            this.item.gerProjEntregaprojetos[i-1]['atual'] = false;
          }
        }
      }
    })
  }

  atualizaConsumo() {
    this.srv.AtualizaConsumo()
      .subscribe((result) => {
        this.carregaTela();
      })
  }

  obtemTipo(item) {
    if (item.gerProjIteracaoentregas[0].concluida=='S') return 'item-concluido';
    if (item.atual) return 'item-atual';
    return 'item-futuro';
  }

  editaProjeto() {
    this.dialog.afterAllClosed.subscribe(result => {
          this.carregaTela();
    });
    this.dialog.open(DetalheProjetoEditaComponent, {
      width: '800px',
      height: '400px',
      data: {
        item: this.item
    }
    })
  }

}
