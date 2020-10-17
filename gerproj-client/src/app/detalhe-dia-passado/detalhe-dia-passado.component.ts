import { Component, Input, OnInit } from '@angular/core';
import { GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-detalhe-dia-passado',
  templateUrl: './detalhe-dia-passado.component.html',
  styleUrls: ['./detalhe-dia-passado.component.css']
})
export class DetalheDiaPassadoComponent implements OnInit {

  @Input() ano: number
  lista: GerProj_ProjetoPmbok[];

  constructor(private srv: GerProj_ProjetoPmbokApi) { }

  ngOnInit() {
    this.carrega();
  }

  carrega() {
    let hoje = new Date();
    let dia = hoje.getDay();
    let mes = hoje.getMonth();
    this.srv.TempoDia(dia,mes,this.ano)
      .subscribe((resultado:GerProj_ProjetoPmbok[])=> {
        console.log('Dia:' , dia, '  Mes:', mes, ' Ano:' ,this.ano);
        console.log('resultado:' , resultado);
        this.lista = resultado;
      })
  }

}
