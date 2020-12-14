/* tslint:disable */
import {
  OportunidadeMacroeconomica
} from '../index';

declare var Object: any;
export interface OportunidadeMacroeconomicaProjetoInterface {
  "id"?: number;
  "oportunidadeMacroeconomicaId"?: number;
  "gerProjProjetopmbokId"?: number;
  oportunidadeMacroeconomica?: OportunidadeMacroeconomica;
}

export class OportunidadeMacroeconomicaProjeto implements OportunidadeMacroeconomicaProjetoInterface {
  "id": number;
  "oportunidadeMacroeconomicaId": number;
  "gerProjProjetopmbokId": number;
  oportunidadeMacroeconomica: OportunidadeMacroeconomica;
  constructor(data?: OportunidadeMacroeconomicaProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OportunidadeMacroeconomicaProjeto`.
   */
  public static getModelName() {
    return "OportunidadeMacroeconomicaProjeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OportunidadeMacroeconomicaProjeto for dynamic purposes.
  **/
  public static factory(data: OportunidadeMacroeconomicaProjetoInterface): OportunidadeMacroeconomicaProjeto{
    return new OportunidadeMacroeconomicaProjeto(data);
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
      name: 'OportunidadeMacroeconomicaProjeto',
      plural: 'OportunidadeMacroeconomicaProjetos',
      path: 'OportunidadeMacroeconomicaProjetos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "oportunidadeMacroeconomicaId": {
          name: 'oportunidadeMacroeconomicaId',
          type: 'number'
        },
        "gerProjProjetopmbokId": {
          name: 'gerProjProjetopmbokId',
          type: 'number'
        },
      },
      relations: {
        oportunidadeMacroeconomica: {
          name: 'oportunidadeMacroeconomica',
          type: 'OportunidadeMacroeconomica',
          model: 'OportunidadeMacroeconomica',
          relationType: 'belongsTo',
                  keyFrom: 'oportunidadeMacroeconomicaId',
          keyTo: 'id'
        },
      }
    }
  }
}
