import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';
import { GerProj_ProjetoPmbok, GerProj_EntregaProjetoApi, GerProj_ProjetoPmbokApi, GerProj_EntregaProjeto } from '../shared/sdk';

@Component({
  selector: 'app-entrega-projeto-edita',
  templateUrl: './entrega-projeto-edita.component.html',
  styleUrls: ['./entrega-projeto-edita.component.css']
})
export class EntregaProjetoEditaComponent extends BaseEditComponent {

  criaItem() {
    throw new Error('Method not implemented.');
  }

  listaProjeto:GerProj_ProjetoPmbok[];

  constructor(protected dialog:MatDialogRef<EntregaProjetoEditaComponent>, 
        @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: GerProj_EntregaProjetoApi,
        private srvProjeto:GerProj_ProjetoPmbokApi) { 
          super(dialog,data,servico)
        }


  montaCombos() {
    console.log('item:' , this.item);
    this.srvProjeto.ListaMesmoGrupo(this.item.id_projeto_pmbok_ee)
      .subscribe((result:GerProj_ProjetoPmbok[]) => {
        this.listaProjeto = result;
      })
  }


 

  onSubmit() {
    console.log('AtualizaEntregaProjeto: ' + JSON.stringify(this.item));
    this.servico.AtualizaEntregaProjeto(this.item, (err, obj) => {
      console.log("Erro:" + err.message);
    }).subscribe((e: any) => {
      console.log(JSON.stringify(e));
      this.closeDialog();
    });

  }



}
