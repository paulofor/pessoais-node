/* tslint:disable */
import {
  GerProj_EntregaProjeto
} from '../index';

declare var Object: any;
export interface GerProj_IteracaoEntregaInterface {
  "id"?: number;
  "dataInicio"?: Date;
  "numeroIteracao"?: number;
  "dataFinal"?: Date;
  "tempoPrevisto"?: string;
  "tempoConsumido"?: string;
  "concluida"?: string;
  "dataInicioReal"?: Date;
  "dataFinalReal"?: Date;
  "tempoRestante"?: Date;
  "semanaRestante"?: number;
  "percentualConsumido"?: number;
  "percentualRestante"?: number;
  "id_entrega_projeto_ra"?: number;
  gerProjEntregaprojetos?: GerProj_EntregaProjeto;
}

export class GerProj_IteracaoEntrega implements GerProj_IteracaoEntregaInterface {
  "id": number;
  "dataInicio": Date;
  "numeroIteracao": number;
  "dataFinal": Date;
  "tempoPrevisto": string;
  "tempoConsumido": string;
  "concluida": string;
  "dataInicioReal": Date;
  "dataFinalReal": Date;
  "tempoRestante": Date;
  "semanaRestante": number;
  "percentualConsumido": number;
  "percentualRestante": number;
  "id_entrega_projeto_ra": number;
  gerProjEntregaprojetos: GerProj_EntregaProjeto;
  constructor(data?: GerProj_IteracaoEntregaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GerProj_IteracaoEntrega`.
   */
  public static getModelName() {
    return "GerProj_IteracaoEntrega";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GerProj_IteracaoEntrega for dynamic purposes.
  **/
  public static factory(data: GerProj_IteracaoEntregaInterface): GerProj_IteracaoEntrega{
    return new GerProj_IteracaoEntrega(data);
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
      name: 'GerProj_IteracaoEntrega',
      plural: 'GerProj_IteracaoEntregas',
      path: 'GerProj_IteracaoEntregas',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "dataInicio": {
          name: 'dataInicio',
          type: 'Date'
        },
        "numeroIteracao": {
          name: 'numeroIteracao',
          type: 'number'
        },
        "dataFinal": {
          name: 'dataFinal',
          type: 'Date'
        },
        "tempoPrevisto": {
          name: 'tempoPrevisto',
          type: 'string'
        },
        "tempoConsumido": {
          name: 'tempoConsumido',
          type: 'string'
        },
        "concluida": {
          name: 'concluida',
          type: 'string'
        },
        "dataInicioReal": {
          name: 'dataInicioReal',
          type: 'Date'
        },
        "dataFinalReal": {
          name: 'dataFinalReal',
          type: 'Date'
        },
        "tempoRestante": {
          name: 'tempoRestante',
          type: 'Date'
        },
        "semanaRestante": {
          name: 'semanaRestante',
          type: 'number'
        },
        "percentualConsumido": {
          name: 'percentualConsumido',
          type: 'number'
        },
        "percentualRestante": {
          name: 'percentualRestante',
          type: 'number'
        },
        "id_entrega_projeto_ra": {
          name: 'id_entrega_projeto_ra',
          type: 'number'
        },
      },
      relations: {
        gerProjEntregaprojetos: {
          name: 'gerProjEntregaprojetos',
          type: 'GerProj_EntregaProjeto',
          model: 'GerProj_EntregaProjeto',
          relationType: 'belongsTo',
                  keyFrom: 'id_entrega_projeto_ra',
          keyTo: 'id'
        },
      }
    }
  }
}
