import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from '../base-component/base-list-component';
import { RendaPassivaEditComponent } from '../renda-passiva-edit/renda-passiva-edit.component';
import { RendaPassivaApi } from '../shared/sdk';

@Component({
  selector: 'app-renda-passiva-list',
  templateUrl: './renda-passiva-list.component.html',
  styleUrls: ['./renda-passiva-list.component.css']
})
export class RendaPassivaListComponent extends BaseListComponent {

 
  constructor(protected dialog: MatDialog, protected srv:RendaPassivaApi, private route: ActivatedRoute) {
    super(dialog,srv);
  }
 

 
  getComponente() {
    return RendaPassivaEditComponent;
  }


}
