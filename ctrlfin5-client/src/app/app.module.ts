import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContaListComponent } from './conta-list/conta-list.component';
import { ContaEditComponent } from './conta-edit/conta-edit.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TotalMesesComponent } from './total-meses/total-meses.component';
import { MovimentacaoListComponent } from './movimentacao-list/movimentacao-list.component';
import { MovimentacaoEditComponent } from './movimentacao-edit/movimentacao-edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ContaApi, InternalStorage, LoopBackAuth, MovimentacaoApi, SDKBrowserModule, SDKModels } from './shared/sdk';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';

// Na mão
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatCheckbox, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MovimentacaoAbertaComponent } from './movimentacao-aberta/movimentacao-aberta.component';
import { EstimativaMesComponent } from './estimativa-mes/estimativa-mes.component';
import { ContaFonteAplicacaoListComponent } from './conta-fonte-aplicacao-list/conta-fonte-aplicacao-list.component';
import { ContaFonteAplicacaoHistComponent } from './conta-fonte-aplicacao-hist/conta-fonte-aplicacao-hist.component';
import { ContaHistComponent } from './conta-hist/conta-hist.component';
import { ContaMesComponent } from './conta-mes/conta-mes.component';
import { ContaAplicacaoMesComponent } from './conta-aplicacao-mes/conta-aplicacao-mes.component';
import { ContaAplicacaoMovimentacaoMesComponent } from './conta-aplicacao-movimentacao-mes/conta-aplicacao-movimentacao-mes.component';
import { MovimentacaoContaPeriodoComponent } from './movimentacao-conta-periodo/movimentacao-conta-periodo.component';
import { PesquisaDiaComponent } from './pesquisa-dia/pesquisa-dia.component';
import { MovimentacaoContaAplicacaoPeriodoComponent } from './movimentacao-conta-aplicacao-periodo/movimentacao-conta-aplicacao-periodo.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContaListComponent,
    ContaEditComponent,
    HomeComponent,
    TotalMesesComponent,
    MovimentacaoListComponent,
    MovimentacaoEditComponent,
    MovimentacaoAbertaComponent,
    EstimativaMesComponent,
    ContaFonteAplicacaoListComponent,
    ContaFonteAplicacaoHistComponent,
    ContaHistComponent,
    ContaMesComponent,
    ContaAplicacaoMesComponent,
    ContaAplicacaoMovimentacaoMesComponent,
    MovimentacaoContaPeriodoComponent,
    PesquisaDiaComponent,
    MovimentacaoContaAplicacaoPeriodoComponent
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
    //FileDropModule,
    //ImageUploadModule.forRoot(),
    //NgDragDropModule.forRoot(),
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
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    HttpClient, 
    SocketConnection  , 
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    MovimentacaoApi,
    ContaApi,
    MatNativeDateModule,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
  entryComponents : [
    MovimentacaoEditComponent,
    ContaEditComponent
  ]
})
export class AppModule { }
