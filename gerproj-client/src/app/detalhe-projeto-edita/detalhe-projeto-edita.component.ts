import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-detalhe-projeto-edita',
  templateUrl: './detalhe-projeto-edita.component.html',
  styleUrls: ['./detalhe-projeto-edita.component.css']
})
export class DetalheProjetoEditaComponent implements OnInit {

  item : GerProj_ProjetoPmbok;

  constructor(private dialog:MatDialogRef<DetalheProjetoEditaComponent>, 
        @Inject(MAT_DIALOG_DATA) private data: any, private servico: GerProj_ProjetoPmbokApi) { }

  ngOnInit() {
    if (this.data.item) {
      this.item = this.data.item;
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
      this.servico.updateAttributes(this.item.id, this.item, (err, obj) => {
        console.log("Erro:" + err.message);
      }).subscribe((e: any) => {
        console.log(JSON.stringify(e));
        this.dialog.close();
      });
    }
  }

}
