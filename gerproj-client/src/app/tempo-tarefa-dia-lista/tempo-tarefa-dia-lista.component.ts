import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from '../base-list/base-list.component';
import { GerProj_TempoTarefaApi } from '../shared/sdk';
import { TempoTarefaDiaEditaComponent } from '../tempo-tarefa-dia-edita/tempo-tarefa-dia-edita.component';

@Component({
  selector: 'app-tempo-tarefa-dia-lista',
  templateUrl: './tempo-tarefa-dia-lista.component.html',
  styleUrls: ['./tempo-tarefa-dia-lista.component.css']
})
export class TempoTarefaDiaListaComponent extends BaseListComponent {

 
  constructor(protected dialog: MatDialog, protected srv:GerProj_TempoTarefaApi, private route: ActivatedRoute) {
    super(dialog,srv);
  }
 
  getFiltro() {
    let data = new Date()
    data.setUTCHours(0);
    data.setMinutes(0);
    data.setSeconds(0);
    return {
      'where' : {'horaInicio' : { 'gte' : data } },
      'order' : 'horaInicio desc',
      'include' : { 'relation' : 'gerProjIteracaoentrega' , 'scope' : {
        'include' : { 'relation' : 'gerProjEntregaprojetos' , 'scope' : {
          'include' : {'relation' : 'gerProjProjetopmbok'}
        }}
      }}
    }

    /*
    return { 
      'where' : {'data' : {'gte' : data }},
      'limit' : 10,
      'include' : { 'relation' : 'gerProjIteracaoentrega' , 'scope' : {
        'include' : { 'relation' : 'gerProjEntregaprojetos' , 'scope' : {
          'include' : {'relation' : 'gerProjProjetopmbok'}
        }}
      }}
    };
    */
  }
 
  getComponente() {
    return TempoTarefaDiaEditaComponent;
  }


}
