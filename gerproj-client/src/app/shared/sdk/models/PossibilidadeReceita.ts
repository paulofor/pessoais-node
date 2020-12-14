/* tslint:disable */

declare var Object: any;
export interface PossibilidadeReceitaInterface {
  "nome"?: string;
  "descricao"?: string;
  "probabilidade"?: number;
  "id"?: number;
}

export class PossibilidadeReceita implements PossibilidadeReceitaInterface {
  "nome": string;
  "descricao": string;
  "probabilidade": number;
  "id": number;
  constructor(data?: PossibilidadeReceitaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PossibilidadeReceita`.
   */
  public static getModelName() {
    return "PossibilidadeReceita";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PossibilidadeReceita for dynamic purposes.
  **/
  public static factory(data: PossibilidadeReceitaInterface): PossibilidadeReceita{
    return new PossibilidadeReceita(data);
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
      name: 'PossibilidadeReceita',
      plural: 'PossibilidadeReceita',
      path: 'PossibilidadeReceita',
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
        "probabilidade": {
          name: 'probabilidade',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
