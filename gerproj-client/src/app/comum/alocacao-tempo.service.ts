import { Injectable } from '@angular/core';
import { BaseLoopBackApi, LoopBackConfig } from '../shared/sdk';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlocacaoTempoService extends BaseLoopBackApi {



  public AtualizaListaComProjetoPost(listaEntrada: any, customHeaders?: Function): Observable<any> {
    let _method: string = "POST";
    let _url: string = LoopBackConfig.getPath() + "/" + LoopBackConfig.getApiVersion() +
      "/GerProj_AlocacaoTempos/atualizaListaComProjeto";
    let _routeParams: any = {};
    let _postBody: any = {};
    let _urlParams: any = {};
    if (typeof listaEntrada !== 'undefined' && listaEntrada !== null) {
      _postBody = {
        //lista: { 'lista': lista }
        lista:  { 'lista': listaEntrada } 
      };
    }
    let result = this.request(_method, _url, _routeParams, _urlParams, _postBody, null, customHeaders);
    return result;
  }


  /**
   * The name of the model represented by this $resource,
   * i.e. `PlanoExecucao`.
   */
  public getModelName() {
    return "AlocacaoTempo";
  }
}
