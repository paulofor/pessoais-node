import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ProjetoAnoComponent } from '../projeto-ano/projeto-ano.component';


export const routes : Routes = [
    { path: 'home' , component: HomeComponent },

    { path: 'projetoAno/:id' , component: ProjetoAnoComponent},

    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]