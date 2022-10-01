/* tslint:disable */

declare var Object: any;
export interface GerProj_TempoTarefaInterface {
  "data"?: string;
  "horaInicio"?: string;
  "horaFim"?: string;
  "tarefaId"?: number;
  "usuarioId"?: number;
  "iteracaoEntregaId"?: number;
  "localTarefaId"?: number;
  "id"?: number;
}

export class GerProj_TempoTarefa implements GerProj_TempoTarefaInterface {
  "data": string;
  "horaInicio": string;
  "horaFim": string;
  "tarefaId": number;
  "usuarioId": number;
  "iteracaoEntregaId": number;
  "localTarefaId": number;
  "id": number;
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
        "data": {
          name: 'data',
          type: 'string'
        },
        "horaInicio": {
          name: 'horaInicio',
          type: 'string'
        },
        "horaFim": {
          name: 'horaFim',
          type: 'string'
        },
        "tarefaId": {
          name: 'tarefaId',
          type: 'number'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'number'
        },
        "iteracaoEntregaId": {
          name: 'iteracaoEntregaId',
          type: 'number'
        },
        "localTarefaId": {
          name: 'localTarefaId',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
