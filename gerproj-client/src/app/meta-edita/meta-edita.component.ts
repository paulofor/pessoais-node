import { Component, Inject, OnInit } from '@angular/core';
import { Meta, MetaApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-meta-edita',
  templateUrl: './meta-edita.component.html',
  styleUrls: ['./meta-edita.component.css']
})
export class MetaEditaComponent implements OnInit {

  item: Meta;

  constructor(private dialogRef:MatDialogRef<MetaEditaComponent>, 
      private srv:MetaApi , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (!this.data.item) {
      this.item = new Meta();
      if (this.data.origem) {
        this.item.gerProjProjetopmbokId = this.data.origem.id
      } else {
        this.item.gerProjProjetopmbokId = 0
      }
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
