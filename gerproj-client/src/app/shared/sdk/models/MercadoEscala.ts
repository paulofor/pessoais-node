/* tslint:disable */

declare var Object: any;
export interface MercadoEscalaInterface {
  "nome"?: string;
  "descricao"?: string;
  "id"?: number;
}

export class MercadoEscala implements MercadoEscalaInterface {
  "nome": string;
  "descricao": string;
  "id": number;
  constructor(data?: MercadoEscalaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MercadoEscala`.
   */
  public static getModelName() {
    return "MercadoEscala";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MercadoEscala for dynamic purposes.
  **/
  public static factory(data: MercadoEscalaInterface): MercadoEscala{
    return new MercadoEscala(data);
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
      name: 'MercadoEscala',
      plural: 'MercadoEscalas',
      path: 'MercadoEscalas',
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
