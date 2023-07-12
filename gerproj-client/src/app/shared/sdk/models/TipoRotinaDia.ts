/* tslint:disable */
import {
  RotinaDia
} from '../index';

declare var Object: any;
export interface TipoRotinaDiaInterface {
  "nome"?: string;
  "id"?: number;
  rotinaDia?: RotinaDia[];
}

export class TipoRotinaDia implements TipoRotinaDiaInterface {
  "nome": string;
  "id": number;
  rotinaDia: RotinaDia[];
  constructor(data?: TipoRotinaDiaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TipoRotinaDia`.
   */
  public static getModelName() {
    return "TipoRotinaDia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TipoRotinaDia for dynamic purposes.
  **/
  public static factory(data: TipoRotinaDiaInterface): TipoRotinaDia{
    return new TipoRotinaDia(data);
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
      name: 'TipoRotinaDia',
      plural: 'TipoRotinaDia',
      path: 'TipoRotinaDia',
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
      },
      relations: {
        rotinaDia: {
          name: 'rotinaDia',
          type: 'RotinaDia[]',
          model: 'RotinaDia',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'tipoRotinaDiaId'
        },
      }
    }
  }
}
