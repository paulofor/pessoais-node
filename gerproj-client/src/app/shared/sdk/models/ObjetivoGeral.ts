/* tslint:disable */
import {
  ObjetivoProjeto
} from '../index';

declare var Object: any;
export interface ObjetivoGeralInterface {
  "nome"?: string;
  "id"?: number;
  "objetivoGeralId"?: number;
  objetivoGerals?: ObjetivoGeral[];
  objetivoGeral?: ObjetivoGeral;
  objetivoProjetos?: ObjetivoProjeto[];
}

export class ObjetivoGeral implements ObjetivoGeralInterface {
  "nome": string;
  "id": number;
  "objetivoGeralId": number;
  objetivoGerals: ObjetivoGeral[];
  objetivoGeral: ObjetivoGeral;
  objetivoProjetos: ObjetivoProjeto[];
  constructor(data?: ObjetivoGeralInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ObjetivoGeral`.
   */
  public static getModelName() {
    return "ObjetivoGeral";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ObjetivoGeral for dynamic purposes.
  **/
  public static factory(data: ObjetivoGeralInterface): ObjetivoGeral{
    return new ObjetivoGeral(data);
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
      name: 'ObjetivoGeral',
      plural: 'ObjetivoGerals',
      path: 'ObjetivoGerals',
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
        "objetivoGeralId": {
          name: 'objetivoGeralId',
          type: 'number'
        },
      },
      relations: {
        objetivoGerals: {
          name: 'objetivoGerals',
          type: 'ObjetivoGeral[]',
          model: 'ObjetivoGeral',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'objetivoGeralId'
        },
        objetivoGeral: {
          name: 'objetivoGeral',
          type: 'ObjetivoGeral',
          model: 'ObjetivoGeral',
          relationType: 'belongsTo',
                  keyFrom: 'objetivoGeralId',
          keyTo: 'id'
        },
        objetivoProjetos: {
          name: 'objetivoProjetos',
          type: 'ObjetivoProjeto[]',
          model: 'ObjetivoProjeto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'objetivoGeralId'
        },
      }
    }
  }
}
