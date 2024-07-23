import { Routes } from '@angular/router';
import { DetalheDiaAtualComponent } from '../detalhe-dia-atual/detalhe-dia-atual.component';
import { DetalheProjetoComponent } from '../detalhe-projeto/detalhe-projeto.component';
import { EntregaProjetoFotoAtualComponent } from '../entrega-projeto-foto-atual/entrega-projeto-foto-atual.component';
import { ExecucaoDiaComponent } from '../execucao-dia/execucao-dia.component';
import { FaseEstiloRotinaListComponent } from '../fase-estilo-rotina-list/fase-estilo-rotina-list.component';
import { GrupoProjetoListComponent } from '../grupo-projeto-list/grupo-projeto-list.component';


import { HomeComponent } from '../home/home.component';
import { MercadoEscalaListComponent } from '../mercado-escala-list/mercado-escala-list.component';
import { OportunidadeMacroeconomicaListComponent } from '../oportunidade-macroeconomica-list/oportunidade-macroeconomica-list.component';
import { PlanoSemanalComponent } from '../plano-semanal/plano-semanal.component';
import { PossibilidadeReceitaListComponent } from '../possibilidade-receita-list/possibilidade-receita-list.component';
import { ProdutoEstrategicoListComponent } from '../produto-estrategico-list/produto-estrategico-list.component';
import { ProgramacaoSemanalComponent } from '../programacao-semanal/programacao-semanal.component';
import { ProjetoAnoComponent } from '../projeto-ano/projeto-ano.component';
import { ProjetoPorProdutoEstrategicoListComponent } from '../projeto-por-produto-estrategico-list/projeto-por-produto-estrategico-list.component';
import { RendaPassivaListComponent } from '../renda-passiva-list/renda-passiva-list.component';
import { FaseEstiloRotina } from '../shared/sdk';
import { TempoTarefaDiaListaComponent } from '../tempo-tarefa-dia-lista/tempo-tarefa-dia-lista.component';
import { TipoRotinaListaComponent } from '../tipo-rotina-lista/tipo-rotina-lista.component';
import { ObjetivoGeralListaComponent } from '../objetivo-geral-lista/objetivo-geral-lista.component';


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
    { path: 'tempoTarefa' , component: TempoTarefaDiaListaComponent },
    { path: 'planoSemanal' , component: PlanoSemanalComponent },

    { path: 'produtoEstrategico' , component: ProdutoEstrategicoListComponent },
    { path: 'projetoPorProdutoEstrategico/:id' , component: ProjetoPorProdutoEstrategicoListComponent},
    { path: 'entregaProjetoFotoAtual' , component: EntregaProjetoFotoAtualComponent },

    { path : 'faseEstiloRotina' , component: FaseEstiloRotinaListComponent },
    { path : 'objetivoGeral' , component: ObjetivoGeralListaComponent },

    { path: '',          redirectTo: 'home', pathMatch: 'full' }
]