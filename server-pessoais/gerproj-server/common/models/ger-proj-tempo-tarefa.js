'use strict';

module.exports = function(Gerprojtempotarefa) {

    /*
    select *
    from tempo_tarefa
    inner join iteracao_entrega on id_iteracao_entrega = id_iteracao_entrega_cp
    inner join entrega_projeto on id_entrega_projeto = iteracao_entrega.id_entrega_projeto_ra
    where entrega_projeto.id_projeto_pmbok_ee = 409
    and tempo_tarefa.DATA = date( DATE_ADD(NOW(), INTERVAL 2 HOUR))
    order by hora_inicio desc
    limit 1
    */


    Gerprojtempotarefa.MaisRecenteHojeProjeto = function(idProjeto, callback) {
        let sql = " select * " +
            " from tempo_tarefa " +
            " inner join iteracao_entrega on id_iteracao_entrega = id_iteracao_entrega_cp " +
            " inner join entrega_projeto on id_entrega_projeto = iteracao_entrega.id_entrega_projeto_ra " +
            " where entrega_projeto.id_projeto_pmbok_ee = " + idProjeto +
            " and tempo_tarefa.DATA = date( DATE_ADD(NOW(), INTERVAL 2 HOUR)) " +
            " order by hora_inicio desc " +
            " limit 1";
        let ds = Gerprojtempotarefa.dataSource;
        ds.connector.query(sql,(err,result) => {
            if (result.length>0) {
                callback(null,result[0])
            } else {
                callback(null,{});
            }
        })
    }
};
