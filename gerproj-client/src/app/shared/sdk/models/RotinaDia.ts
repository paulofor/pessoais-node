/* tslint:disable */
import {
  TipoRotinaDia,
  FaseEstiloRotina
} from '../index';

declare var Object: any;
export interface RotinaDiaInterface {
  "horariosTexto"?: string;
  "id"?: number;
  "tipoRotinaDiaId"?: number;
  "faseEstiloRotinaId"?: number;
  tipoRotinaDia?: TipoRotinaDia;
  faseEstiloRotina?: FaseEstiloRotina;
}

export class RotinaDia implements RotinaDiaInterface {
  "horariosTexto": string;
  "id": number;
  "tipoRotinaDiaId": number;
  "faseEstiloRotinaId": number;
  tipoRotinaDia: TipoRotinaDia;
  faseEstiloRotina: FaseEstiloRotina;
  constructor(data?: RotinaDiaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RotinaDia`.
   */
  public static getModelName() {
    return "RotinaDia";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RotinaDia for dynamic purposes.
  **/
  public static factory(data: RotinaDiaInterface): RotinaDia{
    return new RotinaDia(data);
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
      name: 'RotinaDia',
      plural: 'RotinaDia',
      path: 'RotinaDia',
      idName: 'id',
      properties: {
        "horariosTexto": {
          name: 'horariosTexto',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "tipoRotinaDiaId": {
          name: 'tipoRotinaDiaId',
          type: 'number'
        },
        "faseEstiloRotinaId": {
          name: 'faseEstiloRotinaId',
          type: 'number'
        },
      },
      relations: {
        tipoRotinaDia: {
          name: 'tipoRotinaDia',
          type: 'TipoRotinaDia',
          model: 'TipoRotinaDia',
          relationType: 'belongsTo',
                  keyFrom: 'tipoRotinaDiaId',
          keyTo: 'id'
        },
        faseEstiloRotina: {
          name: 'faseEstiloRotina',
          type: 'FaseEstiloRotina',
          model: 'FaseEstiloRotina',
          relationType: 'belongsTo',
                  keyFrom: 'faseEstiloRotinaId',
          keyTo: 'id'
        },
      }
    }
  }
}
