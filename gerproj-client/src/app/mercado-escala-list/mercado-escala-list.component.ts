import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from '../base-component/base-list-component';
import { MercadoEscalaEditComponent } from '../mercado-escala-edit/mercado-escala-edit.component';
import { MercadoEscalaApi } from '../shared/sdk';

@Component({
  selector: 'app-mercado-escala-list',
  templateUrl: './mercado-escala-list.component.html',
  styleUrls: ['./mercado-escala-list.component.css']
})
export class MercadoEscalaListComponent extends BaseListComponent {

  constructor(protected dialog: MatDialog, protected srv:MercadoEscalaApi, private route: ActivatedRoute) {
    super(dialog,srv);
  }
 

 
  getComponente() {
    return MercadoEscalaEditComponent;
  }

}
