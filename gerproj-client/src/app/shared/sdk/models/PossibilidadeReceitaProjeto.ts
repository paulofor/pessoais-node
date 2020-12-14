/* tslint:disable */
import {
  PossibilidadeReceita
} from '../index';

declare var Object: any;
export interface PossibilidadeReceitaProjetoInterface {
  "id"?: number;
  "possibilidadeReceitaId"?: number;
  "gerProjProjetopmbokId"?: number;
  possibilidadeReceita?: PossibilidadeReceita;
}

export class PossibilidadeReceitaProjeto implements PossibilidadeReceitaProjetoInterface {
  "id": number;
  "possibilidadeReceitaId": number;
  "gerProjProjetopmbokId": number;
  possibilidadeReceita: PossibilidadeReceita;
  constructor(data?: PossibilidadeReceitaProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PossibilidadeReceitaProjeto`.
   */
  public static getModelName() {
    return "PossibilidadeReceitaProjeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PossibilidadeReceitaProjeto for dynamic purposes.
  **/
  public static factory(data: PossibilidadeReceitaProjetoInterface): PossibilidadeReceitaProjeto{
    return new PossibilidadeReceitaProjeto(data);
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
      name: 'PossibilidadeReceitaProjeto',
      plural: 'PossibilidadeReceitaProjetos',
      path: 'PossibilidadeReceitaProjetos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "possibilidadeReceitaId": {
          name: 'possibilidadeReceitaId',
          type: 'number'
        },
        "gerProjProjetopmbokId": {
          name: 'gerProjProjetopmbokId',
          type: 'number'
        },
      },
      relations: {
        possibilidadeReceita: {
          name: 'possibilidadeReceita',
          type: 'PossibilidadeReceita',
          model: 'PossibilidadeReceita',
          relationType: 'belongsTo',
                  keyFrom: 'possibilidadeReceitaId',
          keyTo: 'id'
        },
      }
    }
  }
}
