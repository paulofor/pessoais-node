/* tslint:disable */
import {
  GerProj_GrupoProjeto,
  RendaPassivaProjeto,
  MercadoEscalaProjeto,
  OportunidadeMacroeconomicaProjeto,
  PossibilidadeReceitaProjeto
} from '../index';

declare var Object: any;
export interface GerProj_ProjetoPmbokInterface {
  "id"?: number;
  "nome"?: string;
  "quantidadeIteracao"?: number;
  "ativo"?: string;
  "apelido"?: string;
  "tempoAlocadoSemana"?: string;
  "objetivo"?: string;
  "resultado"?: string;
  "crenca"?: string;
  "grupoProjetoId"?: number;
  grupoProjeto?: GerProj_GrupoProjeto;
  rendaPassivaProjetos?: RendaPassivaProjeto[];
  mercadoEscalaProjetos?: MercadoEscalaProjeto[];
  oportunidadeMacroeconomicaProjetos?: OportunidadeMacroeconomicaProjeto[];
  possibilidadeReceitaProjetos?: PossibilidadeReceitaProjeto[];
}

export class GerProj_ProjetoPmbok implements GerProj_ProjetoPmbokInterface {
  "id": number;
  "nome": string;
  "quantidadeIteracao": number;
  "ativo": string;
  "apelido": string;
  "tempoAlocadoSemana": string;
  "objetivo": string;
  "resultado": string;
  "crenca": string;
  "grupoProjetoId": number;
  grupoProjeto: GerProj_GrupoProjeto;
  rendaPassivaProjetos: RendaPassivaProjeto[];
  mercadoEscalaProjetos: MercadoEscalaProjeto[];
  oportunidadeMacroeconomicaProjetos: OportunidadeMacroeconomicaProjeto[];
  possibilidadeReceitaProjetos: PossibilidadeReceitaProjeto[];
  constructor(data?: GerProj_ProjetoPmbokInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GerProj_ProjetoPmbok`.
   */
  public static getModelName() {
    return "GerProj_ProjetoPmbok";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GerProj_ProjetoPmbok for dynamic purposes.
  **/
  public static factory(data: GerProj_ProjetoPmbokInterface): GerProj_ProjetoPmbok{
    return new GerProj_ProjetoPmbok(data);
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
      name: 'GerProj_ProjetoPmbok',
      plural: 'GerProj_ProjetoPmboks',
      path: 'GerProj_ProjetoPmboks',
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
        "quantidadeIteracao": {
          name: 'quantidadeIteracao',
          type: 'number'
        },
        "ativo": {
          name: 'ativo',
          type: 'string'
        },
        "apelido": {
          name: 'apelido',
          type: 'string'
        },
        "tempoAlocadoSemana": {
          name: 'tempoAlocadoSemana',
          type: 'string'
        },
        "objetivo": {
          name: 'objetivo',
          type: 'string'
        },
        "resultado": {
          name: 'resultado',
          type: 'string'
        },
        "crenca": {
          name: 'crenca',
          type: 'string'
        },
        "grupoProjetoId": {
          name: 'grupoProjetoId',
          type: 'number'
        },
      },
      relations: {
        grupoProjeto: {
          name: 'grupoProjeto',
          type: 'GerProj_GrupoProjeto',
          model: 'GerProj_GrupoProjeto',
          relationType: 'belongsTo',
                  keyFrom: 'grupoProjetoId',
          keyTo: 'id'
        },
        rendaPassivaProjetos: {
          name: 'rendaPassivaProjetos',
          type: 'RendaPassivaProjeto[]',
          model: 'RendaPassivaProjeto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'gerProjProjetopmbokId'
        },
        mercadoEscalaProjetos: {
          name: 'mercadoEscalaProjetos',
          type: 'MercadoEscalaProjeto[]',
          model: 'MercadoEscalaProjeto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'gerProjProjetopmbokId'
        },
        oportunidadeMacroeconomicaProjetos: {
          name: 'oportunidadeMacroeconomicaProjetos',
          type: 'OportunidadeMacroeconomicaProjeto[]',
          model: 'OportunidadeMacroeconomicaProjeto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'gerProjProjetopmbokId'
        },
        possibilidadeReceitaProjetos: {
          name: 'possibilidadeReceitaProjetos',
          type: 'PossibilidadeReceitaProjeto[]',
          model: 'PossibilidadeReceitaProjeto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'gerProjProjetopmbokId'
        },
      }
    }
  }
}
