/* tslint:disable */

declare var Object: any;
export interface GerProj_SistemaCrencaInterface {
  "nome"?: string;
  "descricao"?: string;
  "id"?: number;
}

export class GerProj_SistemaCrenca implements GerProj_SistemaCrencaInterface {
  "nome": string;
  "descricao": string;
  "id": number;
  constructor(data?: GerProj_SistemaCrencaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GerProj_SistemaCrenca`.
   */
  public static getModelName() {
    return "GerProj_SistemaCrenca";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GerProj_SistemaCrenca for dynamic purposes.
  **/
  public static factory(data: GerProj_SistemaCrencaInterface): GerProj_SistemaCrenca{
    return new GerProj_SistemaCrenca(data);
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
      name: 'GerProj_SistemaCrenca',
      plural: 'GerProj_SistemaCrencas',
      path: 'GerProj_SistemaCrencas',
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
