import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from '../base-list/base-list.component';
import { ProdutoEstrategicoEditComponent } from '../produto-estrategico-edit/produto-estrategico-edit.component';
import { GerProj_ProdutoEstrategicoApi } from '../shared/sdk';

@Component({
  selector: 'app-produto-estrategico-list',
  templateUrl: './produto-estrategico-list.component.html',
  styleUrls: ['./produto-estrategico-list.component.css']
})
export class ProdutoEstrategicoListComponent  extends BaseListComponent {

  constructor(protected dialog: MatDialog, protected srv:GerProj_ProdutoEstrategicoApi, private route: ActivatedRoute) {
    super(dialog,srv);
  }
 

 
  getComponente() {
    return ProdutoEstrategicoEditComponent;
  }

  getFiltro() {
    return {'order' : 'segundoConsumido desc'}
  }

}
