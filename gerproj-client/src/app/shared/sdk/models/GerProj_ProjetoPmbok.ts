/* tslint:disable */
import {
  GerProj_GrupoProjeto,
  RendaPassivaProjeto,
  MercadoEscalaProjeto,
  OportunidadeMacroeconomicaProjeto,
  PossibilidadeReceitaProjeto,
  GerProj_EntregaProjeto,
  GerProj_AlocacaoTempo,
  GerProj_ProdutoEstrategico
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
  "executando"?: number;
  "tempoCompleto"?: number;
  "usuarioId"?: number;
  "percentualTempoAlocado"?: number;
  "segundoConsumido"?: number;
  "tempoConsumido"?: Date;
  "primeiraData"?: Date;
  "ultimaData"?: Date;
  "grupoProjetoId"?: number;
  "id_entrega_projeto_atual"?: number;
  "id_produto_estrategico_ra"?: number;
  grupoProjeto?: GerProj_GrupoProjeto;
  rendaPassivaProjetos?: RendaPassivaProjeto[];
  mercadoEscalaProjetos?: MercadoEscalaProjeto[];
  oportunidadeMacroeconomicaProjetos?: OportunidadeMacroeconomicaProjeto[];
  possibilidadeReceitaProjetos?: PossibilidadeReceitaProjeto[];
  gerProjEntregaprojetos?: GerProj_EntregaProjeto[];
  gerProjEntregaProjetoAtual?: GerProj_EntregaProjeto;
  gerProjAlocacaotempos?: GerProj_AlocacaoTempo[];
  gerProjProdutoestrategico?: GerProj_ProdutoEstrategico;
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
  "executando": number;
  "tempoCompleto": number;
  "usuarioId": number;
  "percentualTempoAlocado": number;
  "segundoConsumido": number;
  "tempoConsumido": Date;
  "primeiraData": Date;
  "ultimaData": Date;
  "grupoProjetoId": number;
  "id_entrega_projeto_atual": number;
  "id_produto_estrategico_ra": number;
  grupoProjeto: GerProj_GrupoProjeto;
  rendaPassivaProjetos: RendaPassivaProjeto[];
  mercadoEscalaProjetos: MercadoEscalaProjeto[];
  oportunidadeMacroeconomicaProjetos: OportunidadeMacroeconomicaProjeto[];
  possibilidadeReceitaProjetos: PossibilidadeReceitaProjeto[];
  gerProjEntregaprojetos: GerProj_EntregaProjeto[];
  gerProjEntregaProjetoAtual: GerProj_EntregaProjeto;
  gerProjAlocacaotempos: GerProj_AlocacaoTempo[];
  gerProjProdutoestrategico: GerProj_ProdutoEstrategico;
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
        "executando": {
          name: 'executando',
          type: 'number'
        },
        "tempoCompleto": {
          name: 'tempoCompleto',
          type: 'number'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'number'
        },
        "percentualTempoAlocado": {
          name: 'percentualTempoAlocado',
          type: 'number'
        },
        "segundoConsumido": {
          name: 'segundoConsumido',
          type: 'number'
        },
        "tempoConsumido": {
          name: 'tempoConsumido',
          type: 'Date'
        },
        "primeiraData": {
          name: 'primeiraData',
          type: 'Date'
        },
        "ultimaData": {
          name: 'ultimaData',
          type: 'Date'
        },
        "grupoProjetoId": {
          name: 'grupoProjetoId',
          type: 'number'
        },
        "id_entrega_projeto_atual": {
          name: 'id_entrega_projeto_atual',
          type: 'number'
        },
        "id_produto_estrategico_ra": {
          name: 'id_produto_estrategico_ra',
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
        gerProjEntregaprojetos: {
          name: 'gerProjEntregaprojetos',
          type: 'GerProj_EntregaProjeto[]',
          model: 'GerProj_EntregaProjeto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id_projeto_pmbok_ee'
        },
        gerProjEntregaProjetoAtual: {
          name: 'gerProjEntregaProjetoAtual',
          type: 'GerProj_EntregaProjeto',
          model: 'GerProj_EntregaProjeto',
          relationType: 'belongsTo',
                  keyFrom: 'id_entrega_projeto_atual',
          keyTo: 'id'
        },
        gerProjAlocacaotempos: {
          name: 'gerProjAlocacaotempos',
          type: 'GerProj_AlocacaoTempo[]',
          model: 'GerProj_AlocacaoTempo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'id_projeto_pmbok_pa'
        },
        gerProjProdutoestrategico: {
          name: 'gerProjProdutoestrategico',
          type: 'GerProj_ProdutoEstrategico',
          model: 'GerProj_ProdutoEstrategico',
          relationType: 'belongsTo',
                  keyFrom: 'id_produto_estrategico_ra',
          keyTo: 'id'
        },
      }
    }
  }
}
