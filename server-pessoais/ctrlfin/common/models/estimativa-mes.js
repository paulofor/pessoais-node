'use strict';

module.exports = function(Estimativames) {



/*
insert into estimativa_mes1 (id_conta_pa, valor, id_periodo_ra)
select id_conta as id_conta_pa,
0 as valor,
187 as id_periodo_ra
from conta1
where ativa = 'S' 
and aplicacao = 'S'
and fonte = 'N'
*/
    Estimativames.CriaEstimativaPeriodo = function(idPeriodo,callback) {
        let sql = "insert into estimativa_mes1 (id_conta_pa, valor, id_periodo_ra) " +
                " select id_conta as id_conta_pa, " +
                " 0 as valor, " +
                idPeriodo + " as id_periodo_ra " +
                " from conta1 " +
                " where ativa = 'S'  " +
                " and aplicacao = 'S' " +
                " and fonte = 'N'";
        let ds = Estimativames.dataSource;
        ds.connector.query(sql,callback);
    }

    Estimativames.AlteraValor = function(idEstimativa,valor,callback) {
        let sql = "update estimativa_mes1 set valor = " + valor + 
            " where id_estimativa_mes = " + idEstimativa;
        let ds = Estimativames.dataSource;
        ds.connector.query(sql,callback);
    }

};
