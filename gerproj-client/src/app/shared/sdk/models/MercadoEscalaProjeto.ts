/* tslint:disable */
import {
  MercadoEscala
} from '../index';

declare var Object: any;
export interface MercadoEscalaProjetoInterface {
  "id"?: number;
  "mercadoEscalaId"?: number;
  "gerProjProjetopmbokId"?: number;
  mercadoEscala?: MercadoEscala;
}

export class MercadoEscalaProjeto implements MercadoEscalaProjetoInterface {
  "id": number;
  "mercadoEscalaId": number;
  "gerProjProjetopmbokId": number;
  mercadoEscala: MercadoEscala;
  constructor(data?: MercadoEscalaProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MercadoEscalaProjeto`.
   */
  public static getModelName() {
    return "MercadoEscalaProjeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MercadoEscalaProjeto for dynamic purposes.
  **/
  public static factory(data: MercadoEscalaProjetoInterface): MercadoEscalaProjeto{
    return new MercadoEscalaProjeto(data);
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
      name: 'MercadoEscalaProjeto',
      plural: 'MercadoEscalaProjetos',
      path: 'MercadoEscalaProjetos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "mercadoEscalaId": {
          name: 'mercadoEscalaId',
          type: 'number'
        },
        "gerProjProjetopmbokId": {
          name: 'gerProjProjetopmbokId',
          type: 'number'
        },
      },
      relations: {
        mercadoEscala: {
          name: 'mercadoEscala',
          type: 'MercadoEscala',
          model: 'MercadoEscala',
          relationType: 'belongsTo',
                  keyFrom: 'mercadoEscalaId',
          keyTo: 'id'
        },
      }
    }
  }
}
