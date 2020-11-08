import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GerProj_GrupoProjeto, GerProj_GrupoProjetoApi } from '../shared/sdk';

@Component({
  selector: 'app-grupo-projeto-edit',
  templateUrl: './grupo-projeto-edit.component.html',
  styleUrls: ['./grupo-projeto-edit.component.css']
})
export class GrupoProjetoEditComponent implements OnInit {

  item: GerProj_GrupoProjeto;

  constructor(private dialogRef:MatDialogRef<GrupoProjetoEditComponent>, 
      private srv:GerProj_GrupoProjetoApi , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (!this.data.item) {
      this.item = new GerProj_GrupoProjeto();
    } else {
      this.item = this.data.item;
    }
  }

  onSubmit() {
    if (!this.item.id) {
      this.srv.create(this.item, (err,obj) => {
        console.log('Erro:' , err.messaage)
      }).subscribe((e:any) => {
        this.dialogRef.close();
      })
    } else {
      this.srv.updateAttributes(this.item.id, this.item, (err,obj) => {
        console.log('Erro:' , err.message)
      }).subscribe((e:any) => {
        this.dialogRef.close();
      })
    }
  }



}
