'use strict';

var app = require('../../server/server');

module.exports = function(Conta) {

    Conta.TotaisAplicacaoPorPeriodo = function(idPeriodo, callback) {
        let sql1 = "select nome_conta as nomeConta , id_conta as id, sum(valor) as valor " +
                " from conta1 c " +
                " inner join movimentacao1 m on c.id_conta = m.id_conta_a " +
                " where m.id_periodo_a = " + idPeriodo +
                " group by nome_conta, id_conta " 
                " order by nome_conta";
        let sql2 = "select distinct nomeConta, id, tab.valor, coalesce(e.valor,0) valorEstimativa   " +
            " from (" + sql1 + ") as tab " +
            " left outer join estimativa_mes1 e on tab.id = e.id_conta_pa " +
            " and e.id_periodo_ra = " + idPeriodo;
        let ds = Conta.dataSource;
        console.log(sql2)
        ds.connector.query(sql2, callback);
    }

    Conta.ListaParaEstimativa = function(callback) {
        app.models.Periodo.ObtemMaisRecentes(6, (err,periodos) => {
            app.models.Periodo.ObtemProximo((err,proximo) => {
                let sql = "select nome_conta as nomeConta, " +
                periodos.map((periodo, index) =>
                    " '" + periodo.apresentacao + "' as periodo" + (index + 1) + ", " +
                    " (select coalesce(sum(valor),0) from movimentacao1 where id_periodo_a = " + periodo.id + " and id_conta_a = c.id_conta) as total" + (index + 1) + ", " +
                    " (select group_concat(concat('Dia ', coalesce(dia,''), ': ', coalesce(valor,0), if(comentario is null or comentario = '', '', concat(' - ', comentario))) order by dia separator '\\n') from movimentacao1 where id_periodo_a = " + periodo.id + " and id_conta_a = c.id_conta) as detalheTotal" + (index + 1) + ", "
                ).join('') +
                " e.valor as valorEstimativa , " +
                " e.id_estimativa_mes as estimativaMesId " +
                " from conta1 c" +
                " left outer join estimativa_mes1 e on e.id_conta_pa = c.id_conta " +
                " where aplicacao='S' and ativa='S' and fonte='N' " +
                " and e.id_periodo_ra = " + proximo.id + 
                " order by nome_conta";
                let ds = Conta.dataSource;
                console.log(sql)
                ds.connector.query(sql, callback); 
            })
           
        })
    }
};
