/* tslint:disable */
import {
  GerProj_AlocacaoTempo
} from '../index';

declare var Object: any;
export interface DiaSemanaInterface {
  "id"?: number;
  "nome"?: string;
  "tempo"?: Date;
  "usuarioId"?: number;
  gerProjAlocacaotempos?: GerProj_AlocacaoTempo[];
}

export class DiaSemana implements DiaSemanaInterface {
  "id": number;
  "nome": string;
  "tempo": Date;
  "usuarioId": number;
  gerProjAlocacaotempos: GerProj_AlocacaoTempo[];
  constructor(data?: DiaSemanaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DiaSemana`.
   */
  public static getModelName() {
    return "DiaSemana";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DiaSemana for dynamic purposes.
  **/
  public static factory(data: DiaSemanaInterface): DiaSemana{
    return new DiaSemana(data);
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
      name: 'DiaSemana',
      plural: 'DiaSemanas',
      path: 'DiaSemanas',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "tempo": {
          name: 'tempo',
          type: 'Date'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'number'
        },
      },
      relations: {
        gerProjAlocacaotempos: {
          name: 'gerProjAlocacaotempos',
          type: 'GerProj_AlocacaoTempo[]',
          model: 'GerProj_AlocacaoTempo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id_dia_semana_gp'
        },
      }
    }
  }
}
