import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from '../base-list/base-list.component';
import { OportunidadeMacroeconomicaEditComponent } from '../oportunidade-macroeconomica-edit/oportunidade-macroeconomica-edit.component';
import { OportunidadeMacroeconomicaApi } from '../shared/sdk';

@Component({
  selector: 'app-oportunidade-macroeconomica-list',
  templateUrl: './oportunidade-macroeconomica-list.component.html',
  styleUrls: ['./oportunidade-macroeconomica-list.component.css']
})
export class OportunidadeMacroeconomicaListComponent extends BaseListComponent {



  constructor(protected dialog: MatDialog, protected srv:OportunidadeMacroeconomicaApi, private route: ActivatedRoute) {
    super(dialog,srv);
  }
 

 
  getComponente() {
    return OportunidadeMacroeconomicaEditComponent;
  }

 

}
