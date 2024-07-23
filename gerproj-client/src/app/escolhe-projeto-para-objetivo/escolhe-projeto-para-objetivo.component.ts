import { Component, Inject, OnInit } from '@angular/core';
import { GerProj_ProjetoPmbokApi, ObjetivoProjeto, ObjetivoProjetoApi } from '../shared/sdk';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-escolhe-projeto-para-objetivo',
  templateUrl: './escolhe-projeto-para-objetivo.component.html',
  styleUrls: ['./escolhe-projeto-para-objetivo.component.css']
})
export class EscolheProjetoParaObjetivoComponent implements OnInit{
  listaItem:any[];

  item: any;
  origem: any;

  constructor(protected dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) protected data: any, protected srvItem: GerProj_ProjetoPmbokApi, protected srvRel: ObjetivoProjetoApi
  ) {

  }  

 
ngOnInit() {
  console.log("Parametro entrada", this.data);
  if (this.data.origem!=null) {
    this.origem = this.data.origem;
  }
  console.log('this.origem:' , this.origem);
  this.srvItem.find(this.getFiltro())
    .subscribe((result: any[]) => {
      this.listaItem = result;
      console.log('ListaItem(BaseSelecionaEditComponent):' , this.listaItem);
    })

}

onChange(event, index, item : any) {
  if (event.checked) {
    let relNovo = this.criaRelacionamento();
    relNovo[this.getNomeChaveOrigemNoRelacionamento()] = this.origem.id;
    relNovo[this.getNomeChaveItemNoRelacionamento()] = item[this.getNomeChaveItem()];
    item[this.getNomePropriedadeRel()].push(relNovo);
  } else {
    item[this.getNomePropriedadeRel()] = [];
  }
}

onSubmit() {
  let listaEnvio:any[] = [];
  for(let i=0;i<this.listaItem.length;i++) {
    if (this.listaItem[i][this.getNomePropriedadeRel()].length>0) {
      listaEnvio.push(this.listaItem[i][this.getNomePropriedadeRel()][0]);
    }
  };
  //console.log('Procurando ' , this.getNomeFuncaoAtualizacaoRelacionamento , ' em ' , this.srvRel);
  console.log('Envio Lista: ' , listaEnvio);
  console.log('Envio Id' , this.origem.id);
  this.srvRel[this.getNomeFuncaoAtualizacaoRelacionamento()](this.origem.id, listaEnvio)
    .subscribe((resultado) => {
      this.dialogRef.close('Pizza!');
    })
}
getCheck(item:any) : boolean {
  //console.log('Procurando:' , this.getNomePropriedadeRel() , " em " , item);
  return (item[this.getNomePropriedadeRel()].length>0);
}
  getNomePropriedadeRel(): string {
    return "objetivoProjetos";
  }
  criaRelacionamento() {
    return new ObjetivoProjeto();
  }
  getNomeChaveItem(): string {
    return "id";
  }
  getNomeChaveItemNoRelacionamento(): string {
    return "gerProjProjetopmbokId";
  }
  getNomeChaveOrigemNoRelacionamento(): string {
    return "objetivoGeralId";
  }
  getNomeFuncaoAtualizacaoRelacionamento(): string {
    return "AtualizaPorObjetivoGeral";
  }

  getFiltro() {
    return {
      'order' : 'nome',
      'where' : {'ativo' : 'S'},
      'include' : [
        {
        'relation' : 'objetivoProjetos',
        'scope' : {
          'where' : {'objetivoGeralId' : this.origem.id }
        } 
      }, 'gerProjProdutoestrategico']
    }
  }
}
