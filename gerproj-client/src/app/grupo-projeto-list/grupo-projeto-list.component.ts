import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GrupoProjetoEditComponent } from '../grupo-projeto-edit/grupo-projeto-edit.component';
import { GerProj_GrupoProjeto, GerProj_GrupoProjetoApi } from '../shared/sdk';

@Component({
  selector: 'app-grupo-projeto-list',
  templateUrl: './grupo-projeto-list.component.html',
  styleUrls: ['./grupo-projeto-list.component.css']
})
export class GrupoProjetoListComponent implements OnInit {

  lista:GerProj_GrupoProjeto[];

  constructor(private srv:GerProj_GrupoProjetoApi, private dialog:MatDialog) { }

  ngOnInit() {
    this.carregaLista();
  }

  carregaLista() {
    this.srv.find()
      .subscribe((result:GerProj_GrupoProjeto[]) => {
        this.lista = result;
      })
  }

  openDialog(item?) {
    this.dialog.afterAllClosed.subscribe(result => {
      console.log('Dialog result: ${result}');
      this.carregaLista();
    });
    this.dialog.open(GrupoProjetoEditComponent, {
      width: '800px',
      data: {
        item: item
      }
    });
  }

}
