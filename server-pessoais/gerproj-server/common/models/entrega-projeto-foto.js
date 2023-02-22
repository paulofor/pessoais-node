'use strict';

var app = require('../../server/server');


module.exports = function(Entregaprojetofoto) {

    Entregaprojetofoto.CriaFoto = function(callback) {
        let sqlLimpa = "update EntregaProjetoFoto set versaoAtual = versaoAtual + 1";
        let sql = "insert into EntregaProjetoFoto " +
            " (versaoAtual,dataFoto,projetoId,projetoNome,produtoEstrategicoId,usuarioId,projetoTempoAlocadoSemana,projetoObjetivo,projetoPercentualTempoAlocado, " +
            " entregaProjetoAtualId,projetoSegundoConsumido,projetoTempoConsumido,entregaOrdenacao,entregaDescricao,entregaDataCriacao, " +
            " entregaObjetivo,entregaDestino,iteracaoDataPrevisao,iteracaoTempoAlocado,iteracaoTempoConsumido,iteracaoTempoRestante, " +
            " iteracaoSemanaRestante,iteracaoPercentualConsumido,iteracaoPercentualRestante) " +
            " select 1,now(),projeto_pmbok.id_projeto_pmbok as projetoId, "  +
            " projeto_pmbok.nome as projetoNome, " +
            " projeto_pmbok.id_produto_estrategico_ra as produtoEstrategicoId, " +
            " id_usuario_p as usuarioId, " +
            " tempo_alocado_semana as projetoTempoAlocadoSemana, " +
            " projeto_pmbok.objetivo as projetoObjetivo, " +
            " projeto_pmbok.percentualTempoAlocado as projetoPercentualTempoAlocado, " +
            " id_entrega_projeto_atual as entregaProjetoAtualId, " +
            " segundoConsumido as projetoSegundoConsumido, " +
            " tempoConsumido as projetoTempoConsumido, " +
            " ordenacao as entregaOrdenacao, " +
            " descricao as entregaDescricao, " +
            " data_criacao as entregaDataCriacao,  " +
            " entrega_projeto.objetivo as entregaObjetivo, " +
            " entrega_projeto.destino as entregaDestino, " +
            " iteracao_entrega.data_final as iteracaoDataPrevisao, " +
            " iteracao_entrega.horas as iteracaoTempoAlocado, " +
            " iteracao_entrega.tempo_consumido as iteracaoTempoConsumido, " +
            " iteracao_entrega.tempo_restante as iteracaoTempoRestante, " +
            " iteracao_entrega.semana_restante as iteracaoSemanaRestante, " +
            " iteracao_entrega.percentualConsumido as iteracaoPercentualConsumido, " +
            " iteracao_entrega.percentualRestante as iteracaoPercentualRestante " +
            " from projeto_pmbok  " +
            " inner join entrega_projeto on entrega_projeto.id_entrega_projeto = projeto_pmbok.id_entrega_projeto_atual  " +
            " inner join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto  " +
            " where ativo = 'S' and id_usuario_p = 1 and numero_iteracao = 1";
        let ds = Entregaprojetofoto.dataSource;
        app.models.GerProj_ProjetoPmbok.AtualizaConsumo((err,result) => {
            console.log('err:', err);
            ds.connector.query(sqlLimpa, (err,result) => {
                ds.connector.query(sql,callback);
            })
        })
    }
};
