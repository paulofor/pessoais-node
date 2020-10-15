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
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatCheckbox, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
//import { NgxImgModule } from 'ngx-img';
import { FileDropModule } from 'ngx-file-drop';
//import { UploadModule } from './upload/upload.module';
import { ImageUploadModule } from "angular2-image-upload";
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
    FileDropModule,
    //UploadModule,
    ImageUploadModule.forRoot(),
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
    MatButtonModule
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
