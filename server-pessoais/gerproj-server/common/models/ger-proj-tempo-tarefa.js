'use strict';

module.exports = function(Gerprojtempotarefa) {

    /*
    select *
    from tempo_tarefa
    inner join iteracao_entrega on id_iteracao_entrega = id_iteracao_entrega_cp
    inner join entrega_projeto on id_entrega_projeto = iteracao_entrega.id_entrega_projeto_ra
    where entrega_projeto.id_projeto_pmbok_ee = 409
    and tempo_tarefa.DATA = date( DATE_SUB(NOW(), INTERVAL 2 HOUR))
    order by hora_inicio desc
    limit 1


    --> Novo


   insert into tempo_tarefa (id_usuario_p, DATA, hora_inicio, hora_fim, id_iteracao_entrega_cp)
    select 1 as id_usuario_p, date(now()) as DATA, now() as hora_inicio, now() as hora_fim,
    id_iteracao_entrega as id_iteracao_entrega_cp 
    from entrega_projeto
    inner join iteracao_entrega on id_entrega_projeto_ra = id_entrega_projeto
    where id_projeto_pmbok_ee = 378 and concluida = 'N' and numero_iteracao = 1
    order by ordenacao
    limit 1

    */


    Gerprojtempotarefa.IniciarTarefaProjeto = function(idProjeto, callback) {
        let sql1 = "update projeto_pmbok set executando = 0";
        let sql2 = "update projeto_pmbok set executando = 1 where id_projeto_pmbok = " + idProjeto;
        let sql = " insert into tempo_tarefa (id_usuario_p, DATA, hora_inicio, hora_fim, id_iteracao_entrega_cp) " +
                " select 1 as id_usuario_p, date(now()) as DATA, now() as hora_inicio, now() as hora_fim, " +
                " id_iteracao_entrega as id_iteracao_entrega_cp  " +
                " from entrega_projeto " +
                " inner join iteracao_entrega on id_entrega_projeto_ra = id_entrega_projeto " +
                " where id_projeto_pmbok_ee = " + idProjeto + " and concluida = 'N' and numero_iteracao = 1 " +
                " order by ordenacao " +
                " limit 1";
        let ds = Gerprojtempotarefa.dataSource;
        ds.connector.query(sql1, (err1,result1) => {
            ds.connector.query(sql2, (err2, result2) => {
                ds.connector.query(sql,callback);
            })
        })
        
    }

    Gerprojtempotarefa.AtrasarTarefaProjeto = function(idProjeto, minuto, callback) {
        let sql = " select tempo_tarefa.* " +
            " from tempo_tarefa " +
            " inner join iteracao_entrega on id_iteracao_entrega = id_iteracao_entrega_cp " +
            " inner join entrega_projeto on id_entrega_projeto = iteracao_entrega.id_entrega_projeto_ra " +
            " where entrega_projeto.id_projeto_pmbok_ee = " + idProjeto +
            " and tempo_tarefa.DATA = date( DATE_SUB(NOW(), INTERVAL 1 HOUR)) " +
            " order by DATA, hora_inicio desc " +
            " limit 1";
        let ds = Gerprojtempotarefa.dataSource;
        ds.connector.query(sql, (err,result) => {
            if (result.length==1) {
                let tempoTarefa = result[0];
                let sqlUpdate = "update tempo_tarefa set hora_inicio = date_add(hora_inicio, interval " + minuto + " minute) where id_tempo_tarefa = " + tempoTarefa.id_tempo_tarefa;
                console.log(sqlUpdate);
                ds.connector.query(sqlUpdate, callback);
            }
        })
    }



    Gerprojtempotarefa.AtualizaMaisRecenteProjeto = function(idProjeto, callback) {
        let sql = " select tempo_tarefa.* " +
            " from tempo_tarefa " +
            " inner join iteracao_entrega on id_iteracao_entrega = id_iteracao_entrega_cp " +
            " inner join entrega_projeto on id_entrega_projeto = iteracao_entrega.id_entrega_projeto_ra " +
            " where entrega_projeto.id_projeto_pmbok_ee = " + idProjeto +
            " and tempo_tarefa.DATA = date( DATE_SUB(NOW(), INTERVAL 1 HOUR)) " +
            " order by DATA, hora_inicio desc " +
            " limit 1";
        let ds = Gerprojtempotarefa.dataSource;
        ds.connector.query(sql, (err,result) => {
            if (result.length==1) {
                let tempoTarefa = result[0];
                let sqlUpdate = "update tempo_tarefa set hora_fim = now() where id_tempo_tarefa = " + tempoTarefa.id_tempo_tarefa;
                ds.connector.query(sqlUpdate, callback);
            }
        })
    }



    Gerprojtempotarefa.MaisRecenteHojeProjeto = function(idProjeto, callback) {
        let sql = " select * " +
            " from tempo_tarefa " +
            " inner join iteracao_entrega on id_iteracao_entrega = id_iteracao_entrega_cp " +
            " inner join entrega_projeto on id_entrega_projeto = iteracao_entrega.id_entrega_projeto_ra " +
            " where entrega_projeto.id_projeto_pmbok_ee = " + idProjeto +
            " and tempo_tarefa.DATA = date( DATE_SUB(NOW(), INTERVAL 1 HOUR)) " +
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
