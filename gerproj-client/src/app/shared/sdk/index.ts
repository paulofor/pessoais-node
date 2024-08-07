/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';

import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { UserApi } from './services/custom/User';
import { DiaSemanaApi } from './services/custom/DiaSemana';
import { CtrlFin_ContaApi } from './services/custom/CtrlFin_Conta';
import { GerProj_ProjetoPmbokApi } from './services/custom/GerProj_ProjetoPmbok';
import { GerProj_GrupoProjetoApi } from './services/custom/GerProj_GrupoProjeto';
import { GerProj_ObjetivoResultadoApi } from './services/custom/GerProj_ObjetivoResultado';
import { GerProj_SistemaCrencaApi } from './services/custom/GerProj_SistemaCrenca';
import { RendaPassivaApi } from './services/custom/RendaPassiva';
import { MercadoEscalaApi } from './services/custom/MercadoEscala';
import { OportunidadeMacroeconomicaApi } from './services/custom/OportunidadeMacroeconomica';
import { RendaPassivaProjetoApi } from './services/custom/RendaPassivaProjeto';
import { MercadoEscalaProjetoApi } from './services/custom/MercadoEscalaProjeto';
import { OportunidadeMacroeconomicaProjetoApi } from './services/custom/OportunidadeMacroeconomicaProjeto';
import { PossibilidadeReceitaApi } from './services/custom/PossibilidadeReceita';
import { PossibilidadeReceitaProjetoApi } from './services/custom/PossibilidadeReceitaProjeto';
import { GerProj_TempoTarefaApi } from './services/custom/GerProj_TempoTarefa';
import { GerProj_IteracaoEntregaApi } from './services/custom/GerProj_IteracaoEntrega';
import { GerProj_EntregaProjetoApi } from './services/custom/GerProj_EntregaProjeto';
import { GerProj_AlocacaoTempoApi } from './services/custom/GerProj_AlocacaoTempo';
import { GerProj_ProdutoEstrategicoApi } from './services/custom/GerProj_ProdutoEstrategico';
import { PlataformaDigitalApi } from './services/custom/PlataformaDigital';
import { EntregaProjetoFotoApi } from './services/custom/EntregaProjetoFoto';
import { TipoRotinaDiaApi } from './services/custom/TipoRotinaDia';
import { RotinaDiaApi } from './services/custom/RotinaDia';
import { FaseEstiloRotinaApi } from './services/custom/FaseEstiloRotina';
import { MetaApi } from './services/custom/Meta';
import { ObjetivoGeralApi } from './services/custom/ObjetivoGeral';
import { ObjetivoProjetoApi } from './services/custom/ObjetivoProjeto';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }) {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        SDKModels,
        RealTime,
        UserApi,
        DiaSemanaApi,
        CtrlFin_ContaApi,
        GerProj_ProjetoPmbokApi,
        GerProj_GrupoProjetoApi,
        GerProj_ObjetivoResultadoApi,
        GerProj_SistemaCrencaApi,
        RendaPassivaApi,
        MercadoEscalaApi,
        OportunidadeMacroeconomicaApi,
        RendaPassivaProjetoApi,
        MercadoEscalaProjetoApi,
        OportunidadeMacroeconomicaProjetoApi,
        PossibilidadeReceitaApi,
        PossibilidadeReceitaProjetoApi,
        GerProj_TempoTarefaApi,
        GerProj_IteracaoEntregaApi,
        GerProj_EntregaProjetoApi,
        GerProj_AlocacaoTempoApi,
        GerProj_ProdutoEstrategicoApi,
        PlataformaDigitalApi,
        EntregaProjetoFotoApi,
        TipoRotinaDiaApi,
        RotinaDiaApi,
        FaseEstiloRotinaApi,
        MetaApi,
        ObjetivoGeralApi,
        ObjetivoProjetoApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

