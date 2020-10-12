/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { DiaSemana } from '../../models/DiaSemana';
import { CtrlFin_Conta } from '../../models/CtrlFin_Conta';
import { GerProj_ProjetoPmbok } from '../../models/GerProj_ProjetoPmbok';
import { GerProj_GrupoProjeto } from '../../models/GerProj_GrupoProjeto';
import { GerProj_ObjetivoResultado } from '../../models/GerProj_ObjetivoResultado';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    DiaSemana: DiaSemana,
    CtrlFin_Conta: CtrlFin_Conta,
    GerProj_ProjetoPmbok: GerProj_ProjetoPmbok,
    GerProj_GrupoProjeto: GerProj_GrupoProjeto,
    GerProj_ObjetivoResultado: GerProj_ObjetivoResultado,
    
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
