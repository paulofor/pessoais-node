import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from '../base-list/base-list.component';
import { FaseEstiloRotinaEditComponent } from '../fase-estilo-rotina-edit/fase-estilo-rotina-edit.component';
import { FaseEstiloRotinaApi } from '../shared/sdk';

@Component({
  selector: 'app-fase-estilo-rotina-list',
  templateUrl: './fase-estilo-rotina-list.component.html',
  styleUrls: ['./fase-estilo-rotina-list.component.css']
})
export class FaseEstiloRotinaListComponent extends BaseListComponent {



  constructor(protected dialog: MatDialog, protected srv:FaseEstiloRotinaApi, private route: ActivatedRoute) {
    super(dialog,srv);
  }
 

 
  getComponente() {
    return FaseEstiloRotinaEditComponent;
  }

 

}
