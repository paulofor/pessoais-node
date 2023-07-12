/* tslint:disable */
import {
  GerProj_ProjetoPmbok
} from '../index';

declare var Object: any;
export interface GerProj_ProdutoEstrategicoInterface {
  "id"?: number;
  "nome"?: string;
  "descricao"?: string;
  "ativo"?: string;
  "segundoConsumido"?: number;
  "tempoConsumido"?: Date;
  gerProjProjetopmboks?: GerProj_ProjetoPmbok[];
}

export class GerProj_ProdutoEstrategico implements GerProj_ProdutoEstrategicoInterface {
  "id": number;
  "nome": string;
  "descricao": string;
  "ativo": string;
  "segundoConsumido": number;
  "tempoConsumido": Date;
  gerProjProjetopmboks: GerProj_ProjetoPmbok[];
  constructor(data?: GerProj_ProdutoEstrategicoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GerProj_ProdutoEstrategico`.
   */
  public static getModelName() {
    return "GerProj_ProdutoEstrategico";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GerProj_ProdutoEstrategico for dynamic purposes.
  **/
  public static factory(data: GerProj_ProdutoEstrategicoInterface): GerProj_ProdutoEstrategico{
    return new GerProj_ProdutoEstrategico(data);
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
      name: 'GerProj_ProdutoEstrategico',
      plural: 'GerProj_ProdutoEstrategicos',
      path: 'GerProj_ProdutoEstrategicos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "ativo": {
          name: 'ativo',
          type: 'string'
        },
        "segundoConsumido": {
          name: 'segundoConsumido',
          type: 'number'
        },
        "tempoConsumido": {
          name: 'tempoConsumido',
          type: 'Date'
        },
      },
      relations: {
        gerProjProjetopmboks: {
          name: 'gerProjProjetopmboks',
          type: 'GerProj_ProjetoPmbok[]',
          model: 'GerProj_ProjetoPmbok',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id_produto_estrategico_ra'
        },
      }
    }
  }
}
