import { Component, Input, OnInit } from '@angular/core';
import { GerProj_ProjetoPmbok, GerProj_ProjetoPmbokApi } from '../shared/sdk';

@Component({
  selector: 'app-detalhe-dia-passado',
  templateUrl: './detalhe-dia-passado.component.html',
  styleUrls: ['./detalhe-dia-passado.component.css']
})
export class DetalheDiaPassadoComponent implements OnInit {

  @Input() ano;
  lista: GerProj_ProjetoPmbok[];
  data:string;
  anos: number;
  tempoTotal

  constructor(private srv: GerProj_ProjetoPmbokApi) { }

  ngOnInit() {
    this.carrega();
  }




// Função para converter um tempo no formato HH:mm:ss para segundos
tempoParaSegundos(tempo) {
  const [horas, minutos, segundos] = tempo.split(':').map(Number);
  return horas * 3600 + minutos * 60 + segundos;
}

// Função para converter segundos para o formato HH:mm:ss
segundosParaTempo(segundos) {
  const horas = Math.floor(segundos / 3600);
  segundos %= 3600;
  const minutos = Math.floor(segundos / 60);
  segundos %= 60;
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}





  carrega() {
    let hoje = new Date();
    let dia = hoje.getDate();
    let mes = hoje.getMonth() + 1;
    this.anos = hoje.getFullYear() - this.ano;
    
    const dataAnterior = new Date(this.ano,mes-1,dia);
    let diaSemana;
    switch (dataAnterior.getDay()) {
      case 0:
        diaSemana = 'Domingo';
        break;
      case 1:
        diaSemana = 'Segunda-feira';
        break;
      case 2:
        diaSemana = 'Terça-feira';
        break;
      case 3:
        diaSemana = 'Quarta-feira';
        break;
      case 4:
        diaSemana = 'Quinta-feira';
        break;
      case 5:
        diaSemana = 'Sexta-feira';
        break;
      case 6:
        diaSemana = 'Sábado';
        break;
    }
    this.data = dia + '/' + mes + '/' + this.ano +  ' - ' + diaSemana;
    this.srv.TempoDia(dia,mes,this.ano)
      .subscribe((resultado:GerProj_ProjetoPmbok[])=> {
        console.log('Dia:' , dia, '  Mes:', mes, ' Ano:' ,this.ano);
        console.log('resultado:' , resultado);
        this.lista = resultado;
        // Somar os tempos em segundos
        let totalSegundos = 0;
        for (const item of this.lista) {
          totalSegundos += this.tempoParaSegundos(item['tempo']);
        }
        // Converter a soma de segundos de volta para o formato de tempo
        this.tempoTotal = this.segundosParaTempo(totalSegundos);
      })
  }

}
