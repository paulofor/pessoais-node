/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Conta } from '../../models/Conta';
import { EstimativaMes } from '../../models/EstimativaMes';
import { Periodo } from '../../models/Periodo';
import { Movimentacao } from '../../models/Movimentacao';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Conta: Conta,
    EstimativaMes: EstimativaMes,
    Periodo: Periodo,
    Movimentacao: Movimentacao,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
