import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseListComponent } from '../base-component/base-list-component';
import { GrupoProjetoEditComponent } from '../grupo-projeto-edit/grupo-projeto-edit.component';
import { GerProj_GrupoProjeto, GerProj_GrupoProjetoApi } from '../shared/sdk';

@Component({
  selector: 'app-grupo-projeto-list',
  templateUrl: './grupo-projeto-list.component.html',
  styleUrls: ['./grupo-projeto-list.component.css']
})
export class GrupoProjetoListComponent extends BaseListComponent {

  lista:GerProj_GrupoProjeto[];

  constructor(protected dialog: MatDialog, protected srv:GerProj_GrupoProjetoApi) {
    super(dialog,srv);
   }

 
 

  getComponente() {
    return GrupoProjetoEditComponent;
  }

}
