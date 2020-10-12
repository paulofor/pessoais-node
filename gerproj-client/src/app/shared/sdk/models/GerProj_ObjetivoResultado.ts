/* tslint:disable */

declare var Object: any;
export interface GerProj_ObjetivoResultadoInterface {
  "ondeVaiLevar"?: string;
  "ondeLevou"?: string;
  "id"?: number;
}

export class GerProj_ObjetivoResultado implements GerProj_ObjetivoResultadoInterface {
  "ondeVaiLevar": string;
  "ondeLevou": string;
  "id": number;
  constructor(data?: GerProj_ObjetivoResultadoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GerProj_ObjetivoResultado`.
   */
  public static getModelName() {
    return "GerProj_ObjetivoResultado";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GerProj_ObjetivoResultado for dynamic purposes.
  **/
  public static factory(data: GerProj_ObjetivoResultadoInterface): GerProj_ObjetivoResultado{
    return new GerProj_ObjetivoResultado(data);
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
      name: 'GerProj_ObjetivoResultado',
      plural: 'GerProj_ObjetivoResultados',
      path: 'GerProj_ObjetivoResultados',
      idName: 'id',
      properties: {
        "ondeVaiLevar": {
          name: 'ondeVaiLevar',
          type: 'string'
        },
        "ondeLevou": {
          name: 'ondeLevou',
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
