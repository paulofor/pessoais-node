import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { BaseListComponent } from '../base-component/base-list-component';
import { EstimativaMesApi, EstimativaMes } from '../shared/sdk';

@Component({
  selector: 'app-estimativa-mes',
  templateUrl: './estimativa-mes.component.html',
  styleUrls: ['./estimativa-mes.component.css']
})
export class EstimativaMesComponent extends BaseListComponent {

  constructor(protected dialog: MatDialog, protected srv:EstimativaMesApi,public router: Router) { 
    super(dialog,srv)
  }

  criaItem() {
    return new EstimativaMes();
  }

  /*
  getComponente() {
    return ContaEditComponent;
  }
  */

  getFiltro() {
    return {
      
    }
  }

 

}
