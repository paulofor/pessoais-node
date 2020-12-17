import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from '../base-component/base-list-component';
import { PossibilidadeReceitaEditComponent } from '../possibilidade-receita-edit/possibilidade-receita-edit.component';
import { PossibilidadeReceitaApi } from '../shared/sdk';

@Component({
  selector: 'app-possibilidade-receita-list',
  templateUrl: './possibilidade-receita-list.component.html',
  styleUrls: ['./possibilidade-receita-list.component.css']
})
export class PossibilidadeReceitaListComponent extends BaseListComponent {

  constructor(protected dialog: MatDialog, protected srv:PossibilidadeReceitaApi, private route: ActivatedRoute) {
    super(dialog,srv);
  }
 

 
  getComponente() {
    return PossibilidadeReceitaEditComponent;
  }

}
