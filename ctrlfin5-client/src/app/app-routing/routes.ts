import { Routes } from '@angular/router';
import { ContaAplicacaoMesComponent } from '../conta-aplicacao-mes/conta-aplicacao-mes.component';
import { ContaAplicacaoMovimentacaoMesComponent } from '../conta-aplicacao-movimentacao-mes/conta-aplicacao-movimentacao-mes.component';
import { ContaFonteAplicacaoListComponent } from '../conta-fonte-aplicacao-list/conta-fonte-aplicacao-list.component';
import { ContaHistComponent } from '../conta-hist/conta-hist.component';
import { ContaListComponent } from '../conta-list/conta-list.component';
import { ContaMesComponent } from '../conta-mes/conta-mes.component';
import { EstimativaMesComponent } from '../estimativa-mes/estimativa-mes.component';
import { HomeComponent } from '../home/home.component';
import { MovimentacaoAbertaComponent } from '../movimentacao-aberta/movimentacao-aberta.component';
import { MovimentacaoContaAplicacaoPeriodoComponent } from '../movimentacao-conta-aplicacao-periodo/movimentacao-conta-aplicacao-periodo.component';
import { MovimentacaoContaPeriodoComponent } from '../movimentacao-conta-periodo/movimentacao-conta-periodo.component';
import { MovimentacaoListComponent } from '../movimentacao-list/movimentacao-list.component';
import { PesquisaDiaComponent } from '../pesquisa-dia/pesquisa-dia.component';
import { TotalMesesComponent } from '../total-meses/total-meses.component';




export const routes : Routes = [
    { path: 'home' , component: HomeComponent },
    { path: 'contaList' , component: ContaListComponent },
    { path: 'movimentacaoList' , component: MovimentacaoListComponent },
    { path: 'totalMeses' , component: TotalMesesComponent },
    { path: 'movimentacaoAberta' , component: MovimentacaoAbertaComponent },
    { path: 'estimativaMes' , component: EstimativaMesComponent },
    { path: 'contaFonteAplicacao' , component: ContaFonteAplicacaoListComponent },

    { path: 'contaHist/:id' , component: ContaHistComponent },
    { path: 'contaMes/:id' , component: ContaMesComponent },
 
    { path: 'contaAplicacaoMes/:id' , component: ContaAplicacaoMesComponent },
    { path: 'contaAplicacaoMovimentacaoMes/:id' , component: ContaAplicacaoMovimentacaoMesComponent },

    { path: 'movimentacaoContaPeriodo/:id/:idPeriodo' , component: MovimentacaoContaPeriodoComponent },
    { path: 'movimentacaoContaAplicacaoPeriodo/:id/:idPeriodo' , component: MovimentacaoContaAplicacaoPeriodoComponent },
    { path: 'pesquisaDia' , component: PesquisaDiaComponent },

    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]