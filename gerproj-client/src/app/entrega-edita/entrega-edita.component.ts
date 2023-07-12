import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-edit/base-edit.component';
import { GerProj_EntregaProjeto, GerProj_EntregaProjetoApi, GerProj_IteracaoEntrega, GerProj_IteracaoEntregaApi, GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-entrega-edita',
  templateUrl: './entrega-edita.component.html',
  styleUrls: ['./entrega-edita.component.css']
})
export class EntregaEditaComponent extends BaseEditComponent {

  listaProjeto:GerProj_ProjetoPmbok[];

  constructor(protected dialog:MatDialogRef<EntregaEditaComponent>, 
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


  criaItem() {
    let novoItem = new GerProj_EntregaProjeto();
    novoItem.id_projeto_pmbok_ee = this.data.projeto.id;
    return novoItem;
  }

  onSubmit() {
    console.log('AtualizaEntrega: ' + JSON.stringify(this.item));
    this.servico.AtualizaEntrega(this.item, (err, obj) => {
      console.log("Erro:" + err.message);
    }).subscribe((e: any) => {
      console.log(JSON.stringify(e));
      this.closeDialog();
    });

  }



}
