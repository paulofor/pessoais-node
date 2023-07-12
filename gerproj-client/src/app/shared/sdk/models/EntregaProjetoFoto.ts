/* tslint:disable */

declare var Object: any;
export interface EntregaProjetoFotoInterface {
  "dataFoto"?: Date;
  "projetoId"?: number;
  "projetoNome"?: string;
  "produtoEstrategicoId"?: number;
  "usuarioId"?: number;
  "projetoTempoAlocadoSemana"?: string;
  "projetoObjetivo"?: string;
  "projetoPercentualTempoAlocado"?: number;
  "entregaProjetoAtualId"?: number;
  "projetoSegundoConsumido"?: number;
  "projetoTempoConsumido"?: string;
  "entregaOrdenacao"?: number;
  "entregaDescricao"?: string;
  "entregaDataCriacao"?: Date;
  "entregaObjetivo"?: string;
  "entregaDestino"?: string;
  "iteracaoDataPrevisao"?: Date;
  "iteracaoTempoAlocado"?: string;
  "iteracaoTempoConsumido"?: string;
  "iteracaoTempoRestante"?: string;
  "iteracaoSemanaRestante"?: number;
  "iteracaoPercentualConsumido"?: number;
  "iteracaoPercentualRestante"?: number;
  "versaoAtual"?: number;
}

export class EntregaProjetoFoto implements EntregaProjetoFotoInterface {
  "dataFoto": Date;
  "projetoId": number;
  "projetoNome": string;
  "produtoEstrategicoId": number;
  "usuarioId": number;
  "projetoTempoAlocadoSemana": string;
  "projetoObjetivo": string;
  "projetoPercentualTempoAlocado": number;
  "entregaProjetoAtualId": number;
  "projetoSegundoConsumido": number;
  "projetoTempoConsumido": string;
  "entregaOrdenacao": number;
  "entregaDescricao": string;
  "entregaDataCriacao": Date;
  "entregaObjetivo": string;
  "entregaDestino": string;
  "iteracaoDataPrevisao": Date;
  "iteracaoTempoAlocado": string;
  "iteracaoTempoConsumido": string;
  "iteracaoTempoRestante": string;
  "iteracaoSemanaRestante": number;
  "iteracaoPercentualConsumido": number;
  "iteracaoPercentualRestante": number;
  "versaoAtual": number;
  constructor(data?: EntregaProjetoFotoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EntregaProjetoFoto`.
   */
  public static getModelName() {
    return "EntregaProjetoFoto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EntregaProjetoFoto for dynamic purposes.
  **/
  public static factory(data: EntregaProjetoFotoInterface): EntregaProjetoFoto{
    return new EntregaProjetoFoto(data);
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
      name: 'EntregaProjetoFoto',
      plural: 'EntregaProjetoFotos',
      path: 'EntregaProjetoFotos',
      idName: 'dataFoto',
      properties: {
        "dataFoto": {
          name: 'dataFoto',
          type: 'Date'
        },
        "projetoId": {
          name: 'projetoId',
          type: 'number'
        },
        "projetoNome": {
          name: 'projetoNome',
          type: 'string'
        },
        "produtoEstrategicoId": {
          name: 'produtoEstrategicoId',
          type: 'number'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'number'
        },
        "projetoTempoAlocadoSemana": {
          name: 'projetoTempoAlocadoSemana',
          type: 'string'
        },
        "projetoObjetivo": {
          name: 'projetoObjetivo',
          type: 'string'
        },
        "projetoPercentualTempoAlocado": {
          name: 'projetoPercentualTempoAlocado',
          type: 'number'
        },
        "entregaProjetoAtualId": {
          name: 'entregaProjetoAtualId',
          type: 'number'
        },
        "projetoSegundoConsumido": {
          name: 'projetoSegundoConsumido',
          type: 'number'
        },
        "projetoTempoConsumido": {
          name: 'projetoTempoConsumido',
          type: 'string'
        },
        "entregaOrdenacao": {
          name: 'entregaOrdenacao',
          type: 'number'
        },
        "entregaDescricao": {
          name: 'entregaDescricao',
          type: 'string'
        },
        "entregaDataCriacao": {
          name: 'entregaDataCriacao',
          type: 'Date'
        },
        "entregaObjetivo": {
          name: 'entregaObjetivo',
          type: 'string'
        },
        "entregaDestino": {
          name: 'entregaDestino',
          type: 'string'
        },
        "iteracaoDataPrevisao": {
          name: 'iteracaoDataPrevisao',
          type: 'Date'
        },
        "iteracaoTempoAlocado": {
          name: 'iteracaoTempoAlocado',
          type: 'string'
        },
        "iteracaoTempoConsumido": {
          name: 'iteracaoTempoConsumido',
          type: 'string'
        },
        "iteracaoTempoRestante": {
          name: 'iteracaoTempoRestante',
          type: 'string'
        },
        "iteracaoSemanaRestante": {
          name: 'iteracaoSemanaRestante',
          type: 'number'
        },
        "iteracaoPercentualConsumido": {
          name: 'iteracaoPercentualConsumido',
          type: 'number'
        },
        "iteracaoPercentualRestante": {
          name: 'iteracaoPercentualRestante',
          type: 'number'
        },
        "versaoAtual": {
          name: 'versaoAtual',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
