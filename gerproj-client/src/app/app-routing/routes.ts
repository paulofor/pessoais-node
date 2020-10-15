import { Routes } from '@angular/router';
import { DetalheDiaAtualComponent } from '../detalhe-dia-atual/detalhe-dia-atual.component';


import { HomeComponent } from '../home/home.component';
import { ProgramacaoSemanalComponent } from '../programacao-semanal/programacao-semanal.component';
import { ProjetoAnoComponent } from '../projeto-ano/projeto-ano.component';


export const routes : Routes = [
    { path: 'home' , component: HomeComponent },

    { path: 'projetoAno/:id' , component: ProjetoAnoComponent},

    { path: 'detalheDiaAtual' , component: DetalheDiaAtualComponent },
    { path: 'programacaoSemanal' , component: ProgramacaoSemanalComponent },

    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]