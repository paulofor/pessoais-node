import { Component, OnInit } from '@angular/core';
import { GerProj_ProjetoPmbokApi, GerProj_ProjetoPmbok } from '../shared/sdk';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-projeto-ano',
  templateUrl: './projeto-ano.component.html',
  styleUrls: ['./projeto-ano.component.css']
})
export class ProjetoAnoComponent implements OnInit {

  ano: number;
  listaProjeto: GerProj_ProjetoPmbok[] ;

  constructor(private srv: GerProj_ProjetoPmbokApi, private route: ActivatedRoute) { }

  ngOnInit() {

    this.carregaProjetos();
  }

  carregaProjetos() {
    this.route.params.subscribe((params: Params) => {
      this.ano = params['id'];
      this.srv.TempoAno(this.ano)
      .subscribe((lista:GerProj_ProjetoPmbok[]) => {
       
        this.listaProjeto = lista;
        console.log('Lista Projeto:' , this.listaProjeto);
      })

    })
  }

  totalTempo() {
    
  }


}
