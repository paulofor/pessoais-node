/* tslint:disable */
import {
  GerProj_ObjetivoResultado
} from '../index';

declare var Object: any;
export interface GerProj_GrupoProjetoInterface {
  "nome"?: string;
  "id"?: number;
  "objetivoResultadoId"?: number;
  objetivoResultado?: GerProj_ObjetivoResultado;
}

export class GerProj_GrupoProjeto implements GerProj_GrupoProjetoInterface {
  "nome": string;
  "id": number;
  "objetivoResultadoId": number;
  objetivoResultado: GerProj_ObjetivoResultado;
  constructor(data?: GerProj_GrupoProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GerProj_GrupoProjeto`.
   */
  public static getModelName() {
    return "GerProj_GrupoProjeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GerProj_GrupoProjeto for dynamic purposes.
  **/
  public static factory(data: GerProj_GrupoProjetoInterface): GerProj_GrupoProjeto{
    return new GerProj_GrupoProjeto(data);
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
      name: 'GerProj_GrupoProjeto',
      plural: 'GerProj_GrupoProjetos',
      path: 'GerProj_GrupoProjetos',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "objetivoResultadoId": {
          name: 'objetivoResultadoId',
          type: 'number'
        },
      },
      relations: {
        objetivoResultado: {
          name: 'objetivoResultado',
          type: 'GerProj_ObjetivoResultado',
          model: 'GerProj_ObjetivoResultado',
          relationType: 'belongsTo',
                  keyFrom: 'objetivoResultadoId',
          keyTo: 'id'
        },
      }
    }
  }
}
