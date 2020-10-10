/* tslint:disable */

declare var Object: any;
export interface CtrlFin_ContaInterface {
  "id"?: number;
  "ativo"?: string;
  "fonte"?: string;
  "aplicacao"?: string;
  "descricao"?: string;
  "mensal"?: string;
  "precoMes"?: number;
  "nomeCripto"?: string;
  "ignoraSaldo"?: string;
  "nomeCelular"?: string;
  "pessoal"?: string;
  "movimentacaoCelular"?: string;
  "projecaoProporcional"?: string;
}

export class CtrlFin_Conta implements CtrlFin_ContaInterface {
  "id": number;
  "ativo": string;
  "fonte": string;
  "aplicacao": string;
  "descricao": string;
  "mensal": string;
  "precoMes": number;
  "nomeCripto": string;
  "ignoraSaldo": string;
  "nomeCelular": string;
  "pessoal": string;
  "movimentacaoCelular": string;
  "projecaoProporcional": string;
  constructor(data?: CtrlFin_ContaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CtrlFin_Conta`.
   */
  public static getModelName() {
    return "CtrlFin_Conta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CtrlFin_Conta for dynamic purposes.
  **/
  public static factory(data: CtrlFin_ContaInterface): CtrlFin_Conta{
    return new CtrlFin_Conta(data);
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
      name: 'CtrlFin_Conta',
      plural: 'CtrlFin_Conta',
      path: 'CtrlFin_Conta',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "ativo": {
          name: 'ativo',
          type: 'string'
        },
        "fonte": {
          name: 'fonte',
          type: 'string'
        },
        "aplicacao": {
          name: 'aplicacao',
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
        "movimentacaoCelular": {
          name: 'movimentacaoCelular',
          type: 'string'
        },
        "projecaoProporcional": {
          name: 'projecaoProporcional',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
