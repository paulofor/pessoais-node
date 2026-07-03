import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseEditComponent } from '../base-component/base-edit-component';
import { Conta, ContaApi, Movimentacao, MovimentacaoApi, Periodo, PeriodoApi } from '../shared/sdk';

@Component({
  selector: 'app-movimentacao-edit',
  templateUrl: './movimentacao-edit.component.html',
  styleUrls: ['./movimentacao-edit.component.css']
})
export class MovimentacaoEditComponent extends BaseEditComponent {

  listaContaAplicacao: Conta[];
  listaContaFonte:Conta[];
  listaPeriodoAplicacao: Periodo[];
  listaPeriodoFonte: Periodo[]
  erroValidacaoPeriodo: string;

  corrente: Periodo;
  private novoItem: boolean;

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected servico: MovimentacaoApi,
    protected srvConta: ContaApi, protected srvPeriodo:PeriodoApi
  ) {
    super(dialogRef,data,servico)
  }


  ngOnInit() {
    console.log("Data(BaseEdit):", this.data);
    if (this.data.origem) {
      this.origem = this.data.origem;
    }
    if (!this.data.item) {
      console.log("fluxo nova");
      this.novoItem = true;
      this.srvPeriodo.ObtemCorrente()
      .subscribe((result:Periodo) => {
        this.corrente = result;
        console.log('corrente:' , this.corrente)
        this.item = this.criaItem();
      })
    } else {
      this.novoItem = false;
      console.log('fluxo altera');
      this.item = this.data.item;
      console.log('Item(BaseEdit):', this.item);
      this.item.parcela = 1;
    }
    this.montaCombos();
    this.posItem();
  }

  criaItem() {
    let d = new Date();
    let item:Movimentacao = new Movimentacao();
    item.id_periodo_a = this.data.ultimaFonte && this.data.ultimaFonte.id_periodo_a ? this.data.ultimaFonte.id_periodo_a : this.corrente.id;
    item.id_periodo_f = this.data.ultimaFonte && this.data.ultimaFonte.id_periodo_f ? this.data.ultimaFonte.id_periodo_f : this.corrente.id;
    item.id_conta_f = this.data.ultimaFonte ? this.data.ultimaFonte.id_conta_f : null;
    item.dia = this.data.ultimaFonte && this.data.ultimaFonte.dia ? this.data.ultimaFonte.dia : d.getDate();
    console.log('item: ' , item);
    item.confirmada = 'N';
    item.parcela = 1;
    return item;
  }

  preCria() {
    
  }

  excluir() {
    console.log('Exclusão ID' , this.item.id );
    this.servico.deleteById(this.item.id)
      .subscribe((result) => {
        this.closeDialog();
      })
  }
  
  montaCombos() {
    var filtroA = {
        'where' : { 'and' : [{'aplicacao' : 'S' }, {'ativa' : 'S'}] },
        'order' : 'nomeConta'
    }
    this.srvConta.find(filtroA)
      .subscribe((result:Conta[])=> {
        this.listaContaAplicacao = result;

      })
    var filtroF = {
        'where' : { 'and' : [{'fonte' : 'S' }, {'ativa' : 'S'}] },
        'order' : 'nomeConta'
    }
    this.srvConta.find(filtroF)
      .subscribe((result:Conta[])=> {
        this.listaContaFonte = result;

      })

    var filtroPeriodo = {
      'order' : 'data_referencia desc'
    }
    this.srvPeriodo.find(filtroPeriodo)
      .subscribe((result:Periodo[])=> {
        this.listaPeriodoAplicacao = result;
        this.validaPeriodoFonte();

      })
    
    this.srvPeriodo.find(filtroPeriodo)
      .subscribe((result:Periodo[])=> {
        this.listaPeriodoFonte = result;
        this.validaPeriodoFonte();

      })
  }

    
  onSubmit() {
    if (!this.validaPeriodoFonte()) {
      return;
    }
    this.preSubmit();
    this.normalizaValor();
    console.log('Submit(BaseEdit):' , this.item);
    let itemSalvo = Object.assign({}, this.item);
    this.servico.CriaEdita(this.item, (err, obj) => {
      if (err) {
        console.log("ErroUpsert:" + JSON.stringify(err));
      } else {
        
      }
      this.posSubmit();
    }).subscribe((e: any) => {
      console.log(JSON.stringify(e));
      this.guardaUltimaFonte(itemSalvo);
      this.dialogRef.close(itemSalvo);
    });

  }


  validaPeriodoFonte(): boolean {
    this.erroValidacaoPeriodo = null;
    if (!this.item || !this.item.id_periodo_a || !this.item.id_periodo_f) {
      return true;
    }

    let periodoAplicacao = this.buscaPeriodo(this.listaPeriodoAplicacao, this.item.id_periodo_a);
    let periodoFonte = this.buscaPeriodo(this.listaPeriodoFonte, this.item.id_periodo_f);
    if (!periodoAplicacao || !periodoFonte) {
      return true;
    }

    let dataAplicacao = this.normalizaDataPeriodo(periodoAplicacao);
    let dataFonte = this.normalizaDataPeriodo(periodoFonte);
    if (dataFonte < dataAplicacao) {
      this.erroValidacaoPeriodo = 'Período Fonte deve ser igual ou maior que o Período Aplicação.';
      return false;
    }
    return true;
  }

  buscaPeriodo(lista: Periodo[], id: number): Periodo {
    if (!lista) {
      return null;
    }
    for (let periodo of lista) {
      if (periodo.id == id) {
        return periodo;
      }
    }
    return null;
  }

  normalizaDataPeriodo(periodo: Periodo): string {
    if (periodo.dataReferencia) {
      return periodo.dataReferencia;
    }
    return periodo.apresentacao;
  }

  guardaUltimaFonte(item: Movimentacao) {
    if (!this.novoItem || !item) {
      return;
    }
    this.data.ultimaFonte = {
      id_conta_f: item.id_conta_f,
      id_periodo_f: item.id_periodo_f,
      id_periodo_a: item.id_periodo_a,
      dia: item.dia
    };
  }

  normalizaValor() {
    if (this.item && typeof this.item.valor === 'string' && this.item.valor.trim()) {
      this.item.valor = Number(this.item.valor.replace(',', '.'));
    }
  }

  preSubmit() {
    delete this.item['contaFonte'];
    delete this.item['contaAplicacao'];
    delete this.item['periodoFonte'];
    delete this.item['periodoAplicacao'];
  }

}
