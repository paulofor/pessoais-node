import { OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { BaseLoopBackApi } from "../shared/sdk";

export class BaseListComponent implements OnInit {

    listaBase: any[];

    constructor(protected dialog: MatDialog, protected srv:BaseLoopBackApi) { }


    ngOnInit() {
       this.carregaTela();
    }

    carregaTela() {
        this.srv.find(this.getFiltro())
        .subscribe((result:any[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
        })
    }

    edita(edicao?) {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(this.getComponente(), {
            width: '800px',
            data: {
                item: edicao
            }
        });
    }

    getComponente():any {}

    dialogo1(dado?) {
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dado
        });
    }

    getDialogo1():any {}


    getFiltro() {
        return {}
    }
}