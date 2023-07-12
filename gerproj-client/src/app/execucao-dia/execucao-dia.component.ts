import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExecucaoDiaEditaTempoComponent } from '../execucao-dia-edita-tempo/execucao-dia-edita-tempo.component';
import { GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi, GerProj_TempoTarefaApi } from '../shared/sdk';

@Component({
  selector: 'app-execucao-dia',
  templateUrl: './execucao-dia.component.html',
  styleUrls: ['./execucao-dia.component.css']
})
export class ExecucaoDiaComponent implements OnInit {

  listaBase: GerProj_ProjetoPmbok[];
  totalDia: any;

  constructor(protected dialog: MatDialog,private srv:GerProj_ProjetoPmbokApi, private srvTempoTarefa:GerProj_TempoTarefaApi) { 

  }

  ngOnInit() {
    this.carregaLista();
  }

  getComponente() {
    return ExecucaoDiaEditaTempoComponent;
  }

  carregaLista() {
    this.srv.ListaExecucaoHojePlanejada()
      .subscribe((result:GerProj_ProjetoPmbok[]) => {
        console.log('ResultDia:' , result);
        this.listaBase = result;
        
      });
    this.srv.TotalDiaCorrente()
      .subscribe((result) => {
        console.log('TotalDia: ' , result)
        this.totalDia = result;
      })
  }

  classeRestante(item) {
    if (item.seg_restante>0) return 'dgc-vermelho'
    else return '';
  }

  iniciar(item) {
    this.srvTempoTarefa.IniciarTarefaProjeto(item.id_projeto_pmbok)
    .subscribe((result) => {
      this.carregaLista();
    })
  }

  atualiza(item) {
    this.srvTempoTarefa.AtualizaMaisRecenteProjeto(item.id_projeto_pmbok)
      .subscribe((result) => {
        this.carregaLista();
      })
  }
  atrasa(item) {
    this.srvTempoTarefa.AtrasarTarefaProjeto(item.id_projeto_pmbok,2)
      .subscribe((result) => {
        this.carregaLista();
      })
  }

  completo(item) {
    this.srv.LigaDesligaTempoCompleto(item.id_projeto_pmbok)
      .subscribe((result) => {
        this.carregaLista();
      })
  }

  edita(edicao?) {
    console.log('BaseList.edita (data.item=' + edicao + ')');
    this.dialog.afterAllClosed.subscribe(result => {
        this.carregaLista();
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

}
