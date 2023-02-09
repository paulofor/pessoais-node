'use strict';

module.exports = function(Gerprojprodutoestrategico) {
    Gerprojprodutoestrategico.AtualizaConsumoProdutoProjeto = function(callback) {
        let sql1 = "update projeto_pmbok " +
            " set segundoConsumido = " +
            " (select sum(time_to_sec(hora_fim) - time_to_sec(hora_inicio)) from tempo_tarefa " +
            " inner join iteracao_entrega on id_iteracao_entrega = tempo_tarefa.id_iteracao_entrega_cp " +
            " inner join entrega_projeto on entrega_projeto.id_entrega_projeto = iteracao_entrega.id_entrega_projeto_ra " +
            " where entrega_projeto.id_projeto_pmbok_ee = projeto_pmbok.id_projeto_pmbok) ," +
            " primeiraData = (select date(min(hora_inicio)) from tempo_tarefa " +
            " inner join iteracao_entrega on id_iteracao_entrega = tempo_tarefa.id_iteracao_entrega_cp " +
            " inner join entrega_projeto on entrega_projeto.id_entrega_projeto = iteracao_entrega.id_entrega_projeto_ra " +
            " where entrega_projeto.id_projeto_pmbok_ee = projeto_pmbok.id_projeto_pmbok)," +
            " ultimaData = (select date(max(hora_fim)) from tempo_tarefa " +
            " inner join iteracao_entrega on id_iteracao_entrega = tempo_tarefa.id_iteracao_entrega_cp " +
            " inner join entrega_projeto on entrega_projeto.id_entrega_projeto = iteracao_entrega.id_entrega_projeto_ra " +
            " where entrega_projeto.id_projeto_pmbok_ee = projeto_pmbok.id_projeto_pmbok)"
        let sql2 = "update projeto_pmbok "  +
            " set tempoConsumido = sec_to_time(segundoConsumido)";
        let sql3 = "update produto_estrategico "  +
            " set segundoConsumido = (select sum(segundoConsumido) from projeto_pmbok " +
            " where projeto_pmbok.id_produto_estrategico_ra = produto_estrategico.id_produto_estrategico), " +
            " tempoConsumido = (select sec_to_time(sum(segundoConsumido)) from projeto_pmbok  " +
            " where projeto_pmbok.id_produto_estrategico_ra = produto_estrategico.id_produto_estrategico) ";
          
        let ds = Gerprojprodutoestrategico.dataSource;
        ds.connector.query(sql1, (err1,result1) => {
            ds.connector.query(sql2, (err2,result2) => {
                ds.connector.query(sql3,callback);
            })
        })
    }
};
