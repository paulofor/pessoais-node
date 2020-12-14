/* tslint:disable */
import {
  RendaPassiva
} from '../index';

declare var Object: any;
export interface RendaPassivaProjetoInterface {
  "id"?: number;
  "rendaPassivaId"?: number;
  "gerProjProjetopmbokId"?: number;
  rendaPassiva?: RendaPassiva;
}

export class RendaPassivaProjeto implements RendaPassivaProjetoInterface {
  "id": number;
  "rendaPassivaId": number;
  "gerProjProjetopmbokId": number;
  rendaPassiva: RendaPassiva;
  constructor(data?: RendaPassivaProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RendaPassivaProjeto`.
   */
  public static getModelName() {
    return "RendaPassivaProjeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RendaPassivaProjeto for dynamic purposes.
  **/
  public static factory(data: RendaPassivaProjetoInterface): RendaPassivaProjeto{
    return new RendaPassivaProjeto(data);
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
      name: 'RendaPassivaProjeto',
      plural: 'RendaPassivaProjetos',
      path: 'RendaPassivaProjetos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "rendaPassivaId": {
          name: 'rendaPassivaId',
          type: 'number'
        },
        "gerProjProjetopmbokId": {
          name: 'gerProjProjetopmbokId',
          type: 'number'
        },
      },
      relations: {
        rendaPassiva: {
          name: 'rendaPassiva',
          type: 'RendaPassiva',
          model: 'RendaPassiva',
          relationType: 'belongsTo',
                  keyFrom: 'rendaPassivaId',
          keyTo: 'id'
        },
      }
    }
  }
}
