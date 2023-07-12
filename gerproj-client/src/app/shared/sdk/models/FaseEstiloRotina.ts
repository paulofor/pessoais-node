/* tslint:disable */
import {
  RotinaDia
} from '../index';

declare var Object: any;
export interface FaseEstiloRotinaInterface {
  "nome"?: string;
  "descricao"?: string;
  "dataInicial"?: Date;
  "dataFinal"?: Date;
  "id"?: number;
  rotinaDia?: RotinaDia[];
}

export class FaseEstiloRotina implements FaseEstiloRotinaInterface {
  "nome": string;
  "descricao": string;
  "dataInicial": Date;
  "dataFinal": Date;
  "id": number;
  rotinaDia: RotinaDia[];
  constructor(data?: FaseEstiloRotinaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FaseEstiloRotina`.
   */
  public static getModelName() {
    return "FaseEstiloRotina";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FaseEstiloRotina for dynamic purposes.
  **/
  public static factory(data: FaseEstiloRotinaInterface): FaseEstiloRotina{
    return new FaseEstiloRotina(data);
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
      name: 'FaseEstiloRotina',
      plural: 'FaseEstiloRotinas',
      path: 'FaseEstiloRotinas',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "dataInicial": {
          name: 'dataInicial',
          type: 'Date'
        },
        "dataFinal": {
          name: 'dataFinal',
          type: 'Date'
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
          keyTo: 'faseEstiloRotinaId'
        },
      }
    }
  }
}
