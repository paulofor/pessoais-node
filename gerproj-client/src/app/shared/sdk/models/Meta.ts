/* tslint:disable */
import {
  GerProj_EntregaProjeto,
  GerProj_ProjetoPmbok
} from '../index';

declare var Object: any;
export interface MetaInterface {
  "descricao"?: string;
  "periodo"?: Date;
  "resultado"?: string;
  "atual"?: number;
  "id"?: number;
  "gerProjEntregaprojetoId"?: number;
  "gerProjProjetopmbokId"?: number;
  gerProjEntregaprojeto?: GerProj_EntregaProjeto;
  gerProjProjetopmbok?: GerProj_ProjetoPmbok;
}

export class Meta implements MetaInterface {
  "descricao": string;
  "periodo": Date;
  "resultado": string;
  "atual": number;
  "id": number;
  "gerProjEntregaprojetoId": number;
  "gerProjProjetopmbokId": number;
  gerProjEntregaprojeto: GerProj_EntregaProjeto;
  gerProjProjetopmbok: GerProj_ProjetoPmbok;
  constructor(data?: MetaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Meta`.
   */
  public static getModelName() {
    return "Meta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Meta for dynamic purposes.
  **/
  public static factory(data: MetaInterface): Meta{
    return new Meta(data);
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
      name: 'Meta',
      plural: 'Meta',
      path: 'Meta',
      idName: 'id',
      properties: {
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "periodo": {
          name: 'periodo',
          type: 'Date'
        },
        "resultado": {
          name: 'resultado',
          type: 'string'
        },
        "atual": {
          name: 'atual',
          type: 'number'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "gerProjEntregaprojetoId": {
          name: 'gerProjEntregaprojetoId',
          type: 'number'
        },
        "gerProjProjetopmbokId": {
          name: 'gerProjProjetopmbokId',
          type: 'number'
        },
      },
      relations: {
        gerProjEntregaprojeto: {
          name: 'gerProjEntregaprojeto',
          type: 'GerProj_EntregaProjeto',
          model: 'GerProj_EntregaProjeto',
          relationType: 'belongsTo',
                  keyFrom: 'gerProjEntregaprojetoId',
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
