/* tslint:disable */

declare var Object: any;
export interface RendaPassivaInterface {
  "nome"?: string;
  "descricao"?: string;
  "id"?: number;
}

export class RendaPassiva implements RendaPassivaInterface {
  "nome": string;
  "descricao": string;
  "id": number;
  constructor(data?: RendaPassivaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RendaPassiva`.
   */
  public static getModelName() {
    return "RendaPassiva";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RendaPassiva for dynamic purposes.
  **/
  public static factory(data: RendaPassivaInterface): RendaPassiva{
    return new RendaPassiva(data);
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
      name: 'RendaPassiva',
      plural: 'RendaPassivas',
      path: 'RendaPassivas',
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
