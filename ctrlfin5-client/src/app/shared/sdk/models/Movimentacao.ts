/* tslint:disable */
import {
  Periodo,
  Conta
} from '../index';

declare var Object: any;
export interface MovimentacaoInterface {
  "id"?: number;
  "confirmada"?: string;
  "valor"?: number;
  "comentario"?: string;
  "dia"?: number;
  "parcela"?: number;
  "id_periodo_f"?: number;
  "id_periodo_a"?: number;
  "id_conta_f"?: number;
  "id_conta_a"?: number;
  periodoFonte?: Periodo;
  periodoAplicacao?: Periodo;
  contaFonte?: Conta;
  contaAplicacao?: Conta;
}

export class Movimentacao implements MovimentacaoInterface {
  "id": number;
  "confirmada": string;
  "valor": number;
  "comentario": string;
  "dia": number;
  "parcela": number;
  "id_periodo_f": number;
  "id_periodo_a": number;
  "id_conta_f": number;
  "id_conta_a": number;
  periodoFonte: Periodo;
  periodoAplicacao: Periodo;
  contaFonte: Conta;
  contaAplicacao: Conta;
  constructor(data?: MovimentacaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Movimentacao`.
   */
  public static getModelName() {
    return "Movimentacao";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Movimentacao for dynamic purposes.
  **/
  public static factory(data: MovimentacaoInterface): Movimentacao{
    return new Movimentacao(data);
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
      name: 'Movimentacao',
      plural: 'Movimentacaos',
      path: 'Movimentacaos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "confirmada": {
          name: 'confirmada',
          type: 'string'
        },
        "valor": {
          name: 'valor',
          type: 'number'
        },
        "comentario": {
          name: 'comentario',
          type: 'string'
        },
        "dia": {
          name: 'dia',
          type: 'number'
        },
        "parcela": {
          name: 'parcela',
          type: 'number'
        },
        "id_periodo_f": {
          name: 'id_periodo_f',
          type: 'number'
        },
        "id_periodo_a": {
          name: 'id_periodo_a',
          type: 'number'
        },
        "id_conta_f": {
          name: 'id_conta_f',
          type: 'number'
        },
        "id_conta_a": {
          name: 'id_conta_a',
          type: 'number'
        },
      },
      relations: {
        periodoFonte: {
          name: 'periodoFonte',
          type: 'Periodo',
          model: 'Periodo',
          relationType: 'belongsTo',
                  keyFrom: 'id_periodo_f',
          keyTo: 'id'
        },
        periodoAplicacao: {
          name: 'periodoAplicacao',
          type: 'Periodo',
          model: 'Periodo',
          relationType: 'belongsTo',
                  keyFrom: 'id_periodo_a',
          keyTo: 'id'
        },
        contaFonte: {
          name: 'contaFonte',
          type: 'Conta',
          model: 'Conta',
          relationType: 'belongsTo',
                  keyFrom: 'id_conta_f',
          keyTo: 'id'
        },
        contaAplicacao: {
          name: 'contaAplicacao',
          type: 'Conta',
          model: 'Conta',
          relationType: 'belongsTo',
                  keyFrom: 'id_conta_a',
          keyTo: 'id'
        },
      }
    }
  }
}
