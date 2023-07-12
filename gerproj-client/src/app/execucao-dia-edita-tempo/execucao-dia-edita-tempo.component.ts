import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';
import { GerProj_ProjetoPmbokApi, GerProj_GrupoProjetoApi, GerProj_TempoTarefaApi, GerProj_TempoTarefa, GerProj_EntregaProjetoApi } from '../shared/sdk';

@Component({
  selector: 'app-execucao-dia-edita-tempo',
  templateUrl: './execucao-dia-edita-tempo.component.html',
  styleUrls: ['./execucao-dia-edita-tempo.component.css']
})
export class ExecucaoDiaEditaTempoComponent extends BaseEditComponent {


  tempo: GerProj_TempoTarefa;

  constructor(protected dialog: MatDialogRef<ExecucaoDiaEditaTempoComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: GerProj_TempoTarefaApi, private srvTarefa: GerProj_TempoTarefaApi) {
    super(dialog, data, servico)
  }

  ngOnInit() {
    console.log("Parametro entrada", this.data);
    if (this.data.origem) {
      this.origem = this.data.origem;
    }
    if (!this.data.item) {
      this.item = this.criaItem();
    } else {
      console.log('Item:', this.data.item);
      console.log('Id Projeto: ' , this.data.item.id_projeto_pmbok);
      this.srvTarefa.MaisRecenteHojeProjeto(this.data.item.id_projeto_pmbok)
        .subscribe((result:any) => {
          console.log('result-tempoTarefa:' , result);
          result.horaInicio = this.obtemHorario(result.hora_inicio);
          result.horaFim = 
          this.item = result;
          console.log('TempoTarefa:' , this.item)
        })
    }
  }

 
  obtemHorario(dataHora:string) :string {
    return dataHora.substring(11,19);
  }


  criaItem() {
    return new GerProj_TempoTarefa();
  }



}
