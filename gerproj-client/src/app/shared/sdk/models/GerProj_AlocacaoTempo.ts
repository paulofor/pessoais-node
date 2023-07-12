/* tslint:disable */
import {
  DiaSemana
} from '../index';

declare var Object: any;
export interface GerProj_AlocacaoTempoInterface {
  "id"?: number;
  "tempoPrevisto"?: Date;
  "tempoPrevistoStr"?: string;
  "id_dia_semana_gp"?: number;
  "id_projeto_pmbok_pa"?: number;
  diaSemana?: DiaSemana;
}

export class GerProj_AlocacaoTempo implements GerProj_AlocacaoTempoInterface {
  "id": number;
  "tempoPrevisto": Date;
  "tempoPrevistoStr": string;
  "id_dia_semana_gp": number;
  "id_projeto_pmbok_pa": number;
  diaSemana: DiaSemana;
  constructor(data?: GerProj_AlocacaoTempoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GerProj_AlocacaoTempo`.
   */
  public static getModelName() {
    return "GerProj_AlocacaoTempo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GerProj_AlocacaoTempo for dynamic purposes.
  **/
  public static factory(data: GerProj_AlocacaoTempoInterface): GerProj_AlocacaoTempo{
    return new GerProj_AlocacaoTempo(data);
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
      name: 'GerProj_AlocacaoTempo',
      plural: 'GerProj_AlocacaoTempos',
      path: 'GerProj_AlocacaoTempos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "tempoPrevisto": {
          name: 'tempoPrevisto',
          type: 'Date'
        },
        "tempoPrevistoStr": {
          name: 'tempoPrevistoStr',
          type: 'string'
        },
        "id_dia_semana_gp": {
          name: 'id_dia_semana_gp',
          type: 'number'
        },
        "id_projeto_pmbok_pa": {
          name: 'id_projeto_pmbok_pa',
          type: 'number'
        },
      },
      relations: {
        diaSemana: {
          name: 'diaSemana',
          type: 'DiaSemana',
          model: 'DiaSemana',
          relationType: 'belongsTo',
                  keyFrom: 'id_dia_semana_gp',
          keyTo: 'id'
        },
      }
    }
  }
}
