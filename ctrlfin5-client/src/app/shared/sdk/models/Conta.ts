/* tslint:disable */

declare var Object: any;
export interface ContaInterface {
  "id"?: number;
  "fonte"?: string;
  "aplicacao"?: string;
  "ativo"?: string;
  "descricao"?: string;
  "mensal"?: string;
  "precoMes"?: number;
  "nomeCripto"?: string;
  "ignoraSaldo"?: string;
  "nomeCelular"?: string;
  "pessoal"?: string;
  "usuarioId"?: number;
  "movimentacaoCelular"?: string;
  "projecaoProporcional"?: string;
  "nomeConta"?: string;
  "nomeSimplesCelular"?: string;
}

export class Conta implements ContaInterface {
  "id": number;
  "fonte": string;
  "aplicacao": string;
  "ativo": string;
  "descricao": string;
  "mensal": string;
  "precoMes": number;
  "nomeCripto": string;
  "ignoraSaldo": string;
  "nomeCelular": string;
  "pessoal": string;
  "usuarioId": number;
  "movimentacaoCelular": string;
  "projecaoProporcional": string;
  "nomeConta": string;
  "nomeSimplesCelular": string;
  constructor(data?: ContaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Conta`.
   */
  public static getModelName() {
    return "Conta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Conta for dynamic purposes.
  **/
  public static factory(data: ContaInterface): Conta{
    return new Conta(data);
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
      name: 'Conta',
      plural: 'Conta',
      path: 'Conta',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "fonte": {
          name: 'fonte',
          type: 'string'
        },
        "aplicacao": {
          name: 'aplicacao',
          type: 'string'
        },
        "ativo": {
          name: 'ativo',
          type: 'string'
        },
        "descricao": {
          name: 'descricao',
          type: 'string'
        },
        "mensal": {
          name: 'mensal',
          type: 'string'
        },
        "precoMes": {
          name: 'precoMes',
          type: 'number'
        },
        "nomeCripto": {
          name: 'nomeCripto',
          type: 'string'
        },
        "ignoraSaldo": {
          name: 'ignoraSaldo',
          type: 'string'
        },
        "nomeCelular": {
          name: 'nomeCelular',
          type: 'string'
        },
        "pessoal": {
          name: 'pessoal',
          type: 'string'
        },
        "usuarioId": {
          name: 'usuarioId',
          type: 'number'
        },
        "movimentacaoCelular": {
          name: 'movimentacaoCelular',
          type: 'string'
        },
        "projecaoProporcional": {
          name: 'projecaoProporcional',
          type: 'string'
        },
        "nomeConta": {
          name: 'nomeConta',
          type: 'string'
        },
        "nomeSimplesCelular": {
          name: 'nomeSimplesCelular',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
