import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from './shared/sdk';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
//import { NgxImgModule } from 'ngx-img';
//import { FileDropModule } from 'ngx-file-drop';
//import { UploadModule } from './upload/upload.module';
//import { ImageUploadModule } from "angular2-image-upload";
import { ReactiveFormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';
import { ProjetoAnoComponent } from './projeto-ano/projeto-ano.component';



import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProjetoDetalheComponent } from './projeto-detalhe/projeto-detalhe.component';
import { GrupoProjetoListComponent } from './grupo-projeto-list/grupo-projeto-list.component';
import { GrupoProjetoEditComponent } from './grupo-projeto-edit/grupo-projeto-edit.component';
import { ExecucaoDiaComponent } from './execucao-dia/execucao-dia.component';
import { DetalheDiaAtualComponent } from './detalhe-dia-atual/detalhe-dia-atual.component';
import { ProgramacaoSemanalComponent } from './programacao-semanal/programacao-semanal.component';
import { DetalheDiaPassadoComponent } from './detalhe-dia-passado/detalhe-dia-passado.component';
import { DetalheProjetoComponent } from './detalhe-projeto/detalhe-projeto.component';
import { DetalheProjetoEditaComponent } from './detalhe-projeto-edita/detalhe-projeto-edita.component';
import { MenuComponent } from './menu/menu.component';
import { MenuMaterialComponent } from './menu-material/menu-material.component';
import {MatChipsModule} from '@angular/material/chips';
import { GrupoProjetoEscolhaComponent } from './grupo-projeto-escolha/grupo-projeto-escolha.component';
import { PossibilidadeReceitaListComponent } from './possibilidade-receita-list/possibilidade-receita-list.component';
import { RendaPassivaListComponent } from './renda-passiva-list/renda-passiva-list.component';
import { MercadoEscalaListComponent } from './mercado-escala-list/mercado-escala-list.component';
import { OportunidadeMacroeconomicaListComponent } from './oportunidade-macroeconomica-list/oportunidade-macroeconomica-list.component';
import { RendaPassivaEditComponent } from './renda-passiva-edit/renda-passiva-edit.component';
import { MercadoEscalaEditComponent } from './mercado-escala-edit/mercado-escala-edit.component';
import { OportunidadeMacroeconomicaEditComponent } from './oportunidade-macroeconomica-edit/oportunidade-macroeconomica-edit.component';
import { PossibilidadeReceitaEditComponent } from './possibilidade-receita-edit/possibilidade-receita-edit.component';
import { BaseEscolhaComponent } from './base-escolha/base-escolha.component';
import { RendaPassivaProjetoEscolhaComponent } from './renda-passiva-projeto-escolha/renda-passiva-projeto-escolha.component';
import { ExecucaoDiaEditaTempoComponent } from './execucao-dia-edita-tempo/execucao-dia-edita-tempo.component';
import { TempoTarefaDiaListaComponent } from './tempo-tarefa-dia-lista/tempo-tarefa-dia-lista.component';
import { TempoTarefaDiaEditaComponent } from './tempo-tarefa-dia-edita/tempo-tarefa-dia-edita.component';
import { PlanoSemanalComponent } from './plano-semanal/plano-semanal.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EntregaEditaComponent } from './entrega-edita/entrega-edita.component';
import { IteracaoEntregaEditaComponent } from './iteracao-entrega-edita/iteracao-entrega-edita.component';
import { ProdutoEstrategicoListComponent } from './produto-estrategico-list/produto-estrategico-list.component';
import { ProdutoEstrategicoEditComponent } from './produto-estrategico-edit/produto-estrategico-edit.component';
import { ProjetoPorProdutoEstrategicoListComponent } from './projeto-por-produto-estrategico-list/projeto-por-produto-estrategico-list.component';
import { BaseItemComListaComponent } from './base-item-com-lista/base-item-com-lista.component';
import { ProjetoEditaComponent } from './projeto-edita/projeto-edita.component';
import { EntregaProjetoFotoAtualComponent } from './entrega-projeto-foto-atual/entrega-projeto-foto-atual.component';
import { TrocaProjetoEntregaComponent } from './troca-projeto-entrega/troca-projeto-entrega.component';
import { EntregaProjetoEditaComponent } from './entrega-projeto-edita/entrega-projeto-edita.component';
import { TipoRotinaListaComponent } from './tipo-rotina-lista/tipo-rotina-lista.component';
import { RotinaDiaEditaComponent } from './rotina-dia-edita/rotina-dia-edita.component';
import { FaseEstiloRotinaListComponent } from './fase-estilo-rotina-list/fase-estilo-rotina-list.component';
import { FaseEstiloRotinaEditComponent } from './fase-estilo-rotina-edit/fase-estilo-rotina-edit.component';



registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProjetoAnoComponent,
    ProjetoDetalheComponent,
    GrupoProjetoListComponent,
    GrupoProjetoEditComponent,
    ExecucaoDiaComponent,
    DetalheDiaAtualComponent,
    ProgramacaoSemanalComponent,
    DetalheDiaPassadoComponent,
    DetalheProjetoComponent,
    DetalheProjetoEditaComponent,
    MenuComponent,
    MenuMaterialComponent,
    GrupoProjetoEscolhaComponent,
    PossibilidadeReceitaListComponent,
    RendaPassivaListComponent,
    MercadoEscalaListComponent,
    OportunidadeMacroeconomicaListComponent,
    RendaPassivaEditComponent,
    MercadoEscalaEditComponent,
    OportunidadeMacroeconomicaEditComponent,
    PossibilidadeReceitaEditComponent,
    BaseEscolhaComponent,
    RendaPassivaProjetoEscolhaComponent,
    ExecucaoDiaEditaTempoComponent,
    TempoTarefaDiaListaComponent,
    TempoTarefaDiaEditaComponent,
    PlanoSemanalComponent,
    EntregaEditaComponent,
    IteracaoEntregaEditaComponent,
    ProdutoEstrategicoListComponent,
    ProdutoEstrategicoEditComponent,
    ProjetoPorProdutoEstrategicoListComponent,
    BaseItemComListaComponent,
    ProjetoEditaComponent,
    EntregaProjetoFotoAtualComponent,
    TrocaProjetoEntregaComponent,
    EntregaProjetoEditaComponent,
    TipoRotinaListaComponent,
    RotinaDiaEditaComponent,
    FaseEstiloRotinaListComponent,
    FaseEstiloRotinaEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    //NgxImgModule.forRoot(),
   // FileDropModule,
    //UploadModule,
  //  ImageUploadModule.forRoot(),
    NgDragDropModule.forRoot(),
    SDKBrowserModule.forRoot(),
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    NgApexchartsModule
  ],
  providers: [
    HttpClient, 
    SocketConnection  , 
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    { provide: LOCALE_ID, useValue: 'pt-BR' } 

  ],
  entryComponents : [
    GrupoProjetoEditComponent,
    DetalheProjetoEditaComponent,
    GrupoProjetoEscolhaComponent,
    PossibilidadeReceitaEditComponent,
    ExecucaoDiaEditaTempoComponent,
    EntregaEditaComponent,
    IteracaoEntregaEditaComponent,
    ProjetoEditaComponent
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
