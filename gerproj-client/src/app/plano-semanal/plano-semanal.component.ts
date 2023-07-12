import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlocacaoTempoService } from '../comum/alocacao-tempo.service';
import { DiaSemana, DiaSemanaApi, GerProj_AlocacaoTempo, GerProj_AlocacaoTempoApi, GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { Subscription, interval } from "rxjs";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-plano-semanal',
  templateUrl: './plano-semanal.component.html',
  styleUrls: ['./plano-semanal.component.css']
})
export class PlanoSemanalComponent implements OnInit {

  listaDiaSemana: DiaSemana[];
  projetoComPlano: GerProj_ProjetoPmbok[];

  //somaDias: PlanoExecucao[];
  //somaProcesso: PlanoExecucao[];
  totalTempo: Date;


  public chartOptions: Partial<ChartOptions>;
  dados : any[];

  myControl = new FormControl();

  constructor(private srv: GerProj_ProjetoPmbokApi, private srvAlocacao: AlocacaoTempoService, 
    private srvDiaSemana:DiaSemanaApi, private dialog:MatDialog) { }

  ngOnInit() {
    //this.carregaProcesso();
    this.carregaProjeto();
  }

 
  carregaProjeto() {
    let filtro = {
      'order' : 'tempoAlocadoSemana desc',
      'where' : { 'and' : [{'ativo' : 'S'},{'usuarioId' : 1}] },
      'include' : [{ 'relation' : 'gerProjAlocacaotempos' , 'scope' : {
        'order' : 'id_dia_semana_gp'
      }} , {'relation' : 'gerProjEntregaProjetoAtual' , 'scope' : {'include' : 'gerProjIteracaoentregas'}}]
    }

    this.srv.find(filtro)
      .subscribe((result:GerProj_ProjetoPmbok[]) => {
        console.log('Projetos' , result);
        this.projetoComPlano = result;
        this.dados = new Array();
        for (let i=0;i<result.length;i++) {
          console.log(result[i]);
          let novoItem = {  
            x:result[i].nome, 
            y:result[i].percentualTempoAlocado,
          }
          this.dados.push(novoItem);
        }
        this.montaGrafico();
      })

    let filtroDiaSemana = {
      'where' : {'usuarioId' : 1},
      'order' : 'id'
    };
    this.srvDiaSemana.find(filtroDiaSemana)
      .subscribe((result:DiaSemana[]) => {
        console.log('Dia Semana' , result);
        this.listaDiaSemana = result;
      })
  }

  

  getSoma(processo: GerProj_ProjetoPmbok): Date {
    var saida: Date = new Date(0);
    //if (this.somaProcesso) {
    //  this.somaProcesso.forEach((item: PlanoExecucao) => {
    //    if (processo.id == item.processoNegocioId) {
    //      saida = item.tempoEstimado;
    //    }
    //  })
    //}
    return saida;
  }

  onSubmit() {
    this.ajustaTempos();
    console.log('Chamou submit');
    var lista = { "lista": this.projetoComPlano };
    console.log("Lista-Envio:", this.projetoComPlano);
    this.srvAlocacao.AtualizaListaComProjetoPost(this.projetoComPlano)
      .subscribe((result) => {
        this.carregaProjeto();
      })
  }


 ajustaTempos() {
    this.projetoComPlano.forEach((projeto: GerProj_ProjetoPmbok) => {
      projeto.gerProjAlocacaotempos.forEach((alocacao: GerProj_AlocacaoTempo) => {
        var tempo = alocacao.tempoPrevistoStr.split(":");
        alocacao.tempoPrevisto = new Date(0);
        alocacao.tempoPrevisto.setUTCHours(Number(tempo[0]));
        alocacao.tempoPrevisto.setUTCMinutes(Number(tempo[1]));

      })
    });
    //this.calculaSoma();
  }

  removeItem(item) {
    this.srv.LigaDesligaProjeto(item.id)
      .subscribe((result) => {
        this.carregaProjeto();
      })
  }

  montaGrafico() {
    this.chartOptions = {
      series: [
        {
          name: "Tempo",
          data: this.dados
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      dataLabels: {
        enabled: false
      },
    };
  }



  /*

   carregaProcesso() {
    this.srv.ObtemComPlanoPorSemanaProcesso(this.semana.id, this.contexto.id)
      .subscribe((resultado) => {
        this.processoComPlano = resultado;
        console.log('carregaProcesso:', this.processoComPlano);
        this.ajustaTempos();
      });
  }
  abreExplicacao(itemCorrente) {
    this.dialog.open(ExplicaProcessoComponent, {
      width: '600px',
      height: '400px',
      data: {
        item: itemCorrente
      }
    });
  }


  criaSomaDia() {
    this.somaDias = [];
    var planoSomaDia: PlanoExecucao
    for (var i = 1; i <= 7; i++) {
      planoSomaDia = new PlanoExecucao();
      planoSomaDia.diaSemanaId = i;
      planoSomaDia.tempoEstimado = new Date(0);
      this.somaDias.push(planoSomaDia);
    }
  }

 

  calculaSoma() {
    //console.log('ajustaTempos(ini):', this.processoComPlano);
    this.totalTempo = new Date(0);
    this.somaProcesso = [];
    this.criaSomaDia();
    this.processoComPlano.forEach((valor: ProcessoNegocio) => {
      var planoSoma: PlanoExecucao = new PlanoExecucao();
      planoSoma.tempoEstimado = new Date(0);
      planoSoma.processoNegocioId = valor.id;
      valor.planoExecucaos.forEach((plano: PlanoExecucao) => {
        planoSoma.tempoEstimado.setTime(planoSoma.tempoEstimado.getTime() + plano.tempoEstimado.getTime());
        var planoSomaDia = this.getItemSomaDia(plano.diaSemanaId);
        planoSomaDia.tempoEstimado.setTime(planoSomaDia.tempoEstimado.getTime() + plano.tempoEstimado.getTime());
        this.totalTempo.setTime(this.totalTempo.getTime() + plano.tempoEstimado.getTime());
      });
      this.somaProcesso.push(planoSoma);
    });
  }

  onSubmit() {
    this.ajustaTempos();
    console.log('Chamou submit');
    var lista = { "lista": this.processoComPlano };
    console.log("Envio:", JSON.stringify(lista));
    this.srvPost.AtualizaListaComPlanoPost(lista)
      .subscribe(
        data => {
          this.carregaProcesso();
        },
        err => {
          console.log('Erro-Submit:', err.message);
          console.log('Err:' , err);
        }
      );
  }

  

 

  getItemSomaDia(id: number): PlanoExecucao {
    var saida: PlanoExecucao = null;
    if (this.somaDias) {
      this.somaDias.forEach((item: PlanoExecucao) => {
        if (item.diaSemanaId == id) {
          saida = item;
        }
      })
    }
    return saida;
  }

  getPercentProcesso(processo: ProcessoNegocio): number {
    var saida = 0;
    var item: Date = this.getSoma(processo);
    if (this.totalTempo) {
      var minutosTotal = (this.totalTempo.getUTCHours() * 60) + this.totalTempo.getUTCMinutes();
      var minutosItem = (item.getUTCHours() * 60) + item.getUTCMinutes();
      saida = (minutosItem / minutosTotal) * 100;
    }
    return saida;
  }

  updateDate(evento, coluna: PlanoExecucao) {
    console.log('Evento:', evento);
    coluna.tempoEstimado = evento;
  }

  ajustaTempos() {
    //console.log('ajustaTempos(ini):', this.processoComPlano);
    this.processoComPlano.forEach((processo: ProcessoNegocio) => {
      processo.planoExecucaos.forEach((plano: PlanoExecucao) => {
        var tempo = plano.tempoEstimadoStr.split(":");
        plano.tempoEstimado = new Date(0);
        plano.tempoEstimado.setUTCHours(Number(tempo[0]));
        plano.tempoEstimado.setUTCMinutes(Number(tempo[1]));
        plano.tempoExecucao = new Date(0);
      })
    });
    this.calculaSoma();
  }
  */

}
function ViewChild(arg0: string) {
  throw new Error('Function not implemented.');
}

