import { Component, Inject, OnInit } from '@angular/core';
import { ObjetivoGeral, ObjetivoGeralApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-objetivo-geral-edita',
  templateUrl: './objetivo-geral-edita.component.html',
  styleUrls: ['./objetivo-geral-edita.component.css']
})
export class ObjetivoGeralEditaComponent implements OnInit {

  item: ObjetivoGeral;

  constructor(private dialogRef:MatDialogRef<ObjetivoGeralEditaComponent>, 
      private srv:ObjetivoGeralApi , @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (!this.data.item) {
      this.item = new ObjetivoGeral();
      if (this.data.origem) {
        this.item.objetivoGeralId = this.data.origem.id
      } else {
        this.item.objetivoGeralId = 0
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
