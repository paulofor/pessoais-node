import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, of } from "rxjs";
import { BaseLoopBackApi } from "src/app/shared/sdk";




export class BaseListComponent implements OnInit {

    listaBase: any[];

    constructor(protected dialog: MatDialog, protected srv:BaseLoopBackApi) { }


    ngOnInit() {
        this.preCarregaTela()
            .subscribe((result) => {
                this.carregaTela();
            });
        
    }

    preCarregaTela() : Observable<any>{
        return of({ client: 'Client 1' });
    }
    posCarregaLista() {}

    carregaTela() {
        console.log('Entrou em obtem tela');
        this.srv.find(this.getFiltro())
        .subscribe((result:any[]) => {
            console.log('result: ' , result);
            this.listaBase = result;
            this.posCarregaLista();
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

    dialogo1(dados) {
        console.log('dialogo1.dados:' , dados);
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(this.getDialogo1(), {
            width: '800px',
            data: dados
        });
    }
    getDialogo1() : any {

    }

    dialogo2(dados) {
        console.log('dialogo2.dados:' , dados);
        this.dialog.afterAllClosed.subscribe(result => {
            this.carregaTela();
        });
        this.dialog.open(this.getDialogo2(), {
            width: '800px',
            data: dados
        });
    }
    getDialogo2() : any {

    }


    getComponente():any {}

    getFiltro() {
        return {}
    }

    percentual(valorPerc,valor) {
        let result = ((valorPerc - valor) / valor) * 100;
        return result.toFixed(1);
    }
   
}