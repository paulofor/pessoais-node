import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-component/base-edit-component';
import { GerProj_GrupoProjeto, GerProj_GrupoProjetoApi, GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-detalhe-projeto-edita',
  templateUrl: './detalhe-projeto-edita.component.html',
  styleUrls: ['./detalhe-projeto-edita.component.css']
})


export class DetalheProjetoEditaComponent extends BaseEditComponent {

  //item : GerProj_ProjetoPmbok;
  listaGrupo: GerProj_GrupoProjeto[];

  constructor(protected dialog:MatDialogRef<DetalheProjetoEditaComponent>, 
        @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: GerProj_ProjetoPmbokApi, protected srvGrupo:GerProj_GrupoProjetoApi) { 
          super(dialog,data,servico)
        }


  montaCombos() {
    this.srvGrupo.find()
      .subscribe((result:GerProj_GrupoProjeto[]) => {
        this.listaGrupo = result;
      })
  }

  /*
  ngOnInit() {
    console.log('data:' , this.data);
    if (this.data) {
      this.item = this.data;
    }
    
  }


  onSubmit() {
    if (!this.item.id) {
      this.servico.create(this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.dialog.close()
      });
    } else {
      delete this.item['grupoProjeto'];
      this.servico.updateAttributes(this.item.id, this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.dialog.close();
      });
    }
  }
  */

}
