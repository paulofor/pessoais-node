/* tslint:disable */
import {
  GerProj_ProjetoPmbok,
  GerProj_IteracaoEntrega
} from '../index';

declare var Object: any;
export interface GerProj_EntregaProjetoInterface {
  "id"?: number;
  "ordenacao"?: number;
  "descricao"?: string;
  "dataCriacao"?: Date;
  "folha"?: string;
  "tempoTotal"?: string;
  "objetivo"?: string;
  "destino"?: string;
  "id_projeto_pmbok_ee"?: number;
  gerProjProjetopmbok?: GerProj_ProjetoPmbok;
  gerProjIteracaoentregas?: GerProj_IteracaoEntrega[];
}

export class GerProj_EntregaProjeto implements GerProj_EntregaProjetoInterface {
  "id": number;
  "ordenacao": number;
  "descricao": string;
  "dataCriacao": Date;
  "folha": string;
  "tempoTotal": string;
  "objetivo": string;
  "destino": string;
  "id_projeto_pmbok_ee": number;
  gerProjProjetopmbok: GerProj_ProjetoPmbok;
  gerProjIteracaoentregas: GerProj_IteracaoEntrega[];
  constructor(data?: GerProj_EntregaProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GerProj_EntregaProjeto`.
   */
  public static getModelName() {
    return "GerProj_EntregaProjeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GerProj_EntregaProjeto for dynamic purposes.
  **/
  public static factory(data: GerProj_EntregaProjetoInterface): GerProj_EntregaProjeto{
    return new GerProj_EntregaProjeto(data);
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
      name: 'GerProj_EntregaProjeto',
      plural: 'GerProj_EntregaProjetos',
      path: 'GerProj_EntregaProjetos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "ordenacao": {
          name: 'ordenacao',
          type: 'number'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "dataCriacao": {
          name: 'dataCriacao',
          type: 'Date'
        },
        "folha": {
          name: 'folha',
          type: 'string'
        },
        "tempoTotal": {
          name: 'tempoTotal',
          type: 'string'
        },
        "objetivo": {
          name: 'objetivo',
          type: 'string'
        },
        "destino": {
          name: 'destino',
          type: 'string'
        },
        "id_projeto_pmbok_ee": {
          name: 'id_projeto_pmbok_ee',
          type: 'number'
        },
      },
      relations: {
        gerProjProjetopmbok: {
          name: 'gerProjProjetopmbok',
          type: 'GerProj_ProjetoPmbok',
          model: 'GerProj_ProjetoPmbok',
          relationType: 'belongsTo',
                  keyFrom: 'id_projeto_pmbok_ee',
          keyTo: 'id'
        },
        gerProjIteracaoentregas: {
          name: 'gerProjIteracaoentregas',
          type: 'GerProj_IteracaoEntrega[]',
          model: 'GerProj_IteracaoEntrega',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id_entrega_projeto_ra'
        },
      }
    }
  }
}
