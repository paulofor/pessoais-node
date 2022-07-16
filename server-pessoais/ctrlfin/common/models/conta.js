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
        app.models.Periodo.ObtemMaisRecentes(3, (err,periodos) => {
            app.models.Periodo.ObtemProximo((err,proximo) => {
                let sql = "select nome_conta as nomeConta, " +
                " '" + periodos[0].apresentacao + "' as periodo1, " +
                " (select coalesce(sum(valor),0) from movimentacao1 where id_periodo_a = " + periodos[0].id + " and id_conta_a = c.id_conta) as total1, " +
                " '" + periodos[1].apresentacao + "' as periodo2, " +
                " (select coalesce(sum(valor),0) from movimentacao1 where id_periodo_a = " + periodos[1].id + " and id_conta_a = c.id_conta) as total2, " +
                " '" + periodos[2].apresentacao + "' as periodo3, " +
                " (select coalesce(sum(valor),0) from movimentacao1 where id_periodo_a = " + periodos[2].id + " and id_conta_a = c.id_conta) as total3, " +
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
