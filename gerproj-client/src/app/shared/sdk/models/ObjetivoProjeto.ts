/* tslint:disable */
import {
  ObjetivoGeral,
  GerProj_ProjetoPmbok
} from '../index';

declare var Object: any;
export interface ObjetivoProjetoInterface {
  "peso"?: number;
  "objetivoGeralId"?: number;
  "gerProjProjetopmbokId"?: number;
  objetivoGeral?: ObjetivoGeral;
  gerProjProjetopmbok?: GerProj_ProjetoPmbok;
}

export class ObjetivoProjeto implements ObjetivoProjetoInterface {
  "peso": number;
  "objetivoGeralId": number;
  "gerProjProjetopmbokId": number;
  objetivoGeral: ObjetivoGeral;
  gerProjProjetopmbok: GerProj_ProjetoPmbok;
  constructor(data?: ObjetivoProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ObjetivoProjeto`.
   */
  public static getModelName() {
    return "ObjetivoProjeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ObjetivoProjeto for dynamic purposes.
  **/
  public static factory(data: ObjetivoProjetoInterface): ObjetivoProjeto{
    return new ObjetivoProjeto(data);
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
      name: 'ObjetivoProjeto',
      plural: 'ObjetivoProjetos',
      path: 'ObjetivoProjetos',
      idName: 'objetivoGeralId',
      properties: {
        "peso": {
          name: 'peso',
          type: 'number'
        },
        "objetivoGeralId": {
          name: 'objetivoGeralId',
          type: 'number'
        },
        "gerProjProjetopmbokId": {
          name: 'gerProjProjetopmbokId',
          type: 'number'
        },
      },
      relations: {
        objetivoGeral: {
          name: 'objetivoGeral',
          type: 'ObjetivoGeral',
          model: 'ObjetivoGeral',
          relationType: 'belongsTo',
                  keyFrom: 'objetivoGeralId',
          keyTo: 'id'
        },
        gerProjProjetopmbok: {
          name: 'gerProjProjetopmbok',
          type: 'GerProj_ProjetoPmbok',
          model: 'GerProj_ProjetoPmbok',
          relationType: 'belongsTo',
                  keyFrom: 'gerProjProjetopmbokId',
          keyTo: 'id'
        },
      }
    }
  }
}
