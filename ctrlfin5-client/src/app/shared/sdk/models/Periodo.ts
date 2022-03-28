/* tslint:disable */
import {
  EstimativaMes
} from '../index';

declare var Object: any;
export interface PeriodoInterface {
  "id"?: number;
  "apresentacao"?: string;
  "dataReferencia"?: string;
  estimativaMes?: EstimativaMes[];
}

export class Periodo implements PeriodoInterface {
  "id": number;
  "apresentacao": string;
  "dataReferencia": string;
  estimativaMes: EstimativaMes[];
  constructor(data?: PeriodoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Periodo`.
   */
  public static getModelName() {
    return "Periodo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Periodo for dynamic purposes.
  **/
  public static factory(data: PeriodoInterface): Periodo{
    return new Periodo(data);
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
      name: 'Periodo',
      plural: 'Periodos',
      path: 'Periodos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "apresentacao": {
          name: 'apresentacao',
          type: 'string'
        },
        "dataReferencia": {
          name: 'dataReferencia',
          type: 'string'
        },
      },
      relations: {
        estimativaMes: {
          name: 'estimativaMes',
          type: 'EstimativaMes[]',
          model: 'EstimativaMes',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id_periodo_ra'
        },
      }
    }
  }
}
