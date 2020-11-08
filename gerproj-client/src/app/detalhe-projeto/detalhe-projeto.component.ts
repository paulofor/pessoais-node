import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { DetalheProjetoEditaComponent } from '../detalhe-projeto-edita/detalhe-projeto-edita.component';
import { GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-detalhe-projeto',
  templateUrl: './detalhe-projeto.component.html',
  styleUrls: ['./detalhe-projeto.component.css']
})
export class DetalheProjetoComponent implements OnInit {

  item: GerProj_ProjetoPmbok

  constructor(private srv: GerProj_ProjetoPmbokApi, private router: ActivatedRoute, private dialog:MatDialog) { }

  ngOnInit() {
    this.router.params.subscribe((params:Params) => {
      let id = params['id'];
      let filtro = { 'include' : 'grupoProjeto'}
      this.srv.findById(id, filtro)
        .subscribe((result:GerProj_ProjetoPmbok) => {
          console.log('result:' , result);
          this.item = result;
        })
    })
  }

  edita() {
    this.dialog.open(DetalheProjetoEditaComponent, {
      width: '800px',
      height: '400px',
      data: this.item
    })
  }

}
