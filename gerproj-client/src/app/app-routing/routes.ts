import { Routes } from '@angular/router';
import { DetalheDiaAtualComponent } from '../detalhe-dia-atual/detalhe-dia-atual.component';
import { DetalheProjetoComponent } from '../detalhe-projeto/detalhe-projeto.component';
import { ExecucaoDiaComponent } from '../execucao-dia/execucao-dia.component';
import { GrupoProjetoListComponent } from '../grupo-projeto-list/grupo-projeto-list.component';


import { HomeComponent } from '../home/home.component';
import { MercadoEscalaListComponent } from '../mercado-escala-list/mercado-escala-list.component';
import { OportunidadeMacroeconomicaListComponent } from '../oportunidade-macroeconomica-list/oportunidade-macroeconomica-list.component';
import { PossibilidadeReceitaListComponent } from '../possibilidade-receita-list/possibilidade-receita-list.component';
import { ProgramacaoSemanalComponent } from '../programacao-semanal/programacao-semanal.component';
import { ProjetoAnoComponent } from '../projeto-ano/projeto-ano.component';
import { RendaPassivaListComponent } from '../renda-passiva-list/renda-passiva-list.component';


export const routes : Routes = [
    { path: 'home' , component: HomeComponent },

    { path: 'projetoAno/:id' , component: ProjetoAnoComponent},

    { path: 'detalheDiaAtual' , component: DetalheDiaAtualComponent },
    { path: 'programacaoSemanal' , component: ProgramacaoSemanalComponent },

    { path: 'grupoProjeto' , component:GrupoProjetoListComponent},

    { path: 'detalheProjeto/:id' , component: DetalheProjetoComponent },

    { path: 'possibilidadeReceita', component: PossibilidadeReceitaListComponent},
    { path: 'oportunidadeMacroeconomica' , component: OportunidadeMacroeconomicaListComponent },
    { path: 'rendaPassiva' , component: RendaPassivaListComponent },
    { path: 'mercadoEscala' , component: MercadoEscalaListComponent },
    { path: 'execucaoDia' , component: ExecucaoDiaComponent },

    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]