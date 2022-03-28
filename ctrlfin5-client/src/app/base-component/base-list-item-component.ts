import { OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { BaseLoopBackApi } from "src/app/shared/sdk";




export abstract class BaseListItemComponent implements OnInit {

    listaBase: any[];
    itemBase: any;

    constructor(protected dialog: MatDialog, protected srv:BaseLoopBackApi, 
        protected route: ActivatedRoute, protected router: Router) { }


    ngOnInit() {
        this.preCarregaTela();
        this.carregaTela();
    }

    preCarregaTela() {}
    posCarregaLista() {}


    carregaTela() {
        this.route.params.subscribe((params: Params) => {
          let id = params['id'];
          this.srv.findById(id, this.getFiltro() )
            .subscribe((result) => {
                console.log('ItemBase:' , result);
                this.itemBase = result;
                this.extraiListaBase(this.itemBase);
                this.posCarregaLista();
            });
        })
    }

    abstract extraiListaBase(item);

    

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