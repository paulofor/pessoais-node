/* tslint:disable */
import {
  Conta
} from '../index';

declare var Object: any;
export interface EstimativaMesInterface {
  "id"?: number;
  "dia"?: number;
  "valor"?: number;
  "id_conta_pa"?: number;
  "id_periodo_ra"?: number;
  conta?: Conta;
}

export class EstimativaMes implements EstimativaMesInterface {
  "id": number;
  "dia": number;
  "valor": number;
  "id_conta_pa": number;
  "id_periodo_ra": number;
  conta: Conta;
  constructor(data?: EstimativaMesInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EstimativaMes`.
   */
  public static getModelName() {
    return "EstimativaMes";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EstimativaMes for dynamic purposes.
  **/
  public static factory(data: EstimativaMesInterface): EstimativaMes{
    return new EstimativaMes(data);
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
      name: 'EstimativaMes',
      plural: 'EstimativaMes',
      path: 'EstimativaMes',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "dia": {
          name: 'dia',
          type: 'number'
        },
        "valor": {
          name: 'valor',
          type: 'number'
        },
        "id_conta_pa": {
          name: 'id_conta_pa',
          type: 'number'
        },
        "id_periodo_ra": {
          name: 'id_periodo_ra',
          type: 'number'
        },
      },
      relations: {
        conta: {
          name: 'conta',
          type: 'Conta',
          model: 'Conta',
          relationType: 'belongsTo',
                  keyFrom: 'id_conta_pa',
          keyTo: 'id'
        },
      }
    }
  }
}
