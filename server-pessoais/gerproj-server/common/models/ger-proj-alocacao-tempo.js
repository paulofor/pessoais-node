'use strict';

var app = require('../../server/server');

module.exports = function(Gerprojalocacaotempo) {


    Gerprojalocacaotempo.CriaParaProjeto = function(idProjeto,callback) {
        let sql = "select * from alocacao_tempo2 where id_projeto_pmbok_pa = " + idProjeto;
        let ds = Gerprojalocacaotempo.dataSource;
        ds.connector.query(sql,(err,result) => {
            if (result.length==0) {
                let sql2 = " insert into alocacao_tempo2 (tempo_previsto,tempoPrevistoStr,id_projeto_pmbok_pa,id_dia_semana_gp) " +
                    " select '00:00:00' as tempo_previsto, '00:00:00' as tempoPrevistoStr, " + idProjeto + " as id_projeto_pmbok_pa, " +
                    " id_dia_semana as id_dia_semana_gp " +
                    " from dia_semana " +
                    " where id_usuario_p = 1 ";
                ds.connector.query(sql2,callback)
            } else {
                callback(null,{});
            }
        })
    }


    Gerprojalocacaotempo.AtualizaListaComProjeto = function(lista,callback) {
        //console.log('Recebi a lista' , lista);
        //var listaProcesso2 = listaVersaoRecurso.lista;
        let sqlLimpa = "delete from alocacao_tempo2 " +
            " where id_projeto_pmbok_pa not in " +
            " ( select id_projeto_pmbok from projeto_pmbok where ativo = 'S')";
        let ds = Gerprojalocacaotempo.dataSource;
        ds.connector.query(sqlLimpa, (err,result) => {
            let contaItem = lista.length * lista[0].gerProjAlocacaotempos.length;
            lista.forEach((item) => {
                //console.log('Lista de plano: ', item.planoExecucaos.length);
                item.gerProjAlocacaotempos.forEach((alocacaao) => {
                    //console.log('Plano: ', JSON.stringify(plano));
                    Gerprojalocacaotempo.upsert(alocacaao, (err, result) => {
                        //console.log('Erro:', err);
                        contaItem--;
                        if (contaItem==0) {
                            console.log('Finalizou');
                            app.models.GerProj_ProjetoPmbok.CalculaTempoProjetos(callback)
                        }
                        //console.log("Resultado: ", JSON.stringify(result));
                    })
                })
            });
            //console.log('Finalizado');
        })
    }
};
