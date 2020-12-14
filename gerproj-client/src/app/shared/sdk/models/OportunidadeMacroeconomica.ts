/* tslint:disable */

declare var Object: any;
export interface OportunidadeMacroeconomicaInterface {
  "nome"?: string;
  "descricao"?: string;
  "id"?: number;
}

export class OportunidadeMacroeconomica implements OportunidadeMacroeconomicaInterface {
  "nome": string;
  "descricao": string;
  "id": number;
  constructor(data?: OportunidadeMacroeconomicaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OportunidadeMacroeconomica`.
   */
  public static getModelName() {
    return "OportunidadeMacroeconomica";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OportunidadeMacroeconomica for dynamic purposes.
  **/
  public static factory(data: OportunidadeMacroeconomicaInterface): OportunidadeMacroeconomica{
    return new OportunidadeMacroeconomica(data);
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
      name: 'OportunidadeMacroeconomica',
      plural: 'OportunidadeMacroeconomicas',
      path: 'OportunidadeMacroeconomicas',
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
