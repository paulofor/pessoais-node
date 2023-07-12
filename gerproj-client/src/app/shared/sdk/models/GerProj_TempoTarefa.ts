/* tslint:disable */
import {
  GerProj_IteracaoEntrega
} from '../index';

declare var Object: any;
export interface GerProj_TempoTarefaInterface {
  "id"?: number;
  "data"?: Date;
  "horaInicio"?: Date;
  "horaFim"?: Date;
  "tarefaId"?: number;
  "usuarioId"?: number;
  "localTarefaId"?: number;
  "id_iteracao_entrega_cp"?: number;
  gerProjIteracaoentrega?: GerProj_IteracaoEntrega;
}

export class GerProj_TempoTarefa implements GerProj_TempoTarefaInterface {
  "id": number;
  "data": Date;
  "horaInicio": Date;
  "horaFim": Date;
  "tarefaId": number;
  "usuarioId": number;
  "localTarefaId": number;
  "id_iteracao_entrega_cp": number;
  gerProjIteracaoentrega: GerProj_IteracaoEntrega;
  constructor(data?: GerProj_TempoTarefaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GerProj_TempoTarefa`.
   */
  public static getModelName() {
    return "GerProj_TempoTarefa";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GerProj_TempoTarefa for dynamic purposes.
  **/
  public static factory(data: GerProj_TempoTarefaInterface): GerProj_TempoTarefa{
    return new GerProj_TempoTarefa(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'GerProj_TempoTarefa',
      plural: 'GerProj_TempoTarefas',
      path: 'GerProj_TempoTarefas',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "data": {
          name: 'data',
          type: 'Date'
        },
        "horaInicio": {
          name: 'horaInicio',
          type: 'Date'
        },
        "horaFim": {
          name: 'horaFim',
          type: 'Date'
        },
        "tarefaId": {
          name: 'tarefaId',
          type: 'number'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'number'
        },
        "localTarefaId": {
          name: 'localTarefaId',
          type: 'number'
        },
        "id_iteracao_entrega_cp": {
          name: 'id_iteracao_entrega_cp',
          type: 'number'
        },
      },
      relations: {
        gerProjIteracaoentrega: {
          name: 'gerProjIteracaoentrega',
          type: 'GerProj_IteracaoEntrega',
          model: 'GerProj_IteracaoEntrega',
          relationType: 'belongsTo',
                  keyFrom: 'id_iteracao_entrega_cp',
          keyTo: 'id'
        },
      }
    }
  }
}
