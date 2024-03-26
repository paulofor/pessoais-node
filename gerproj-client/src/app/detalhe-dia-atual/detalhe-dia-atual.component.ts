import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs-compat';
import { GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-detalhe-dia-atual',
  templateUrl: './detalhe-dia-atual.component.html',
  styleUrls: ['./detalhe-dia-atual.component.css']
})
export class DetalheDiaAtualComponent implements OnInit {

  lista: GerProj_ProjetoPmbok[];
  anos: number[] = [] ;

  constructor(private srv:GerProj_ProjetoPmbokApi) { 

  }

  ngOnInit() {
    this.anos.push(2023);
    this.anos.push(2022);
    this.anos.push(2021);
    this.anos.push(2020);
    this.anos.push(2019);
    this.anos.push(2018);
    this.anos.push(2017);
    this.anos.push(2016);
    this.anos.push(2015);
    this.anos.push(2014);
    this.anos.push(2013);
    this.anos.push(2012);
    this.anos.push(2011);
    this.anos.push(2010);
    this.anos.push(2009);
    this.anos.push(2008);
    this.anos.push(2007);
    this.anos.push(2006);

    this.carregaLista();
  }

  carregaLista() {
    this.srv.DetalheDia()
      .subscribe((result:GerProj_ProjetoPmbok[]) => {
        console.log('ResultDia:' , result);
        this.lista = result;
      })
  }


}
