import { Routes } from '@angular/router';
import { DetalheDiaAtualComponent } from '../detalhe-dia-atual/detalhe-dia-atual.component';
import { GrupoProjetoListComponent } from '../grupo-projeto-list/grupo-projeto-list.component';


import { HomeComponent } from '../home/home.component';
import { ProgramacaoSemanalComponent } from '../programacao-semanal/programacao-semanal.component';
import { ProjetoAnoComponent } from '../projeto-ano/projeto-ano.component';


export const routes : Routes = [
    { path: 'home' , component: HomeComponent },

    { path: 'projetoAno/:id' , component: ProjetoAnoComponent},

    { path: 'detalheDiaAtual' , component: DetalheDiaAtualComponent },
    { path: 'programacaoSemanal' , component: ProgramacaoSemanalComponent },

    { path: 'grupoProjeto' , component:GrupoProjetoListComponent},

    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]