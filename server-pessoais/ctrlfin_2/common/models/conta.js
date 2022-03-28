'use strict';

module.exports = function(Conta) {

    Conta.TotaisAplicacaoPorPeriodo = function(idPeriodo, callback) {
        let sql = "select  nome_conta as nomeConta , id_conta as id, sum(valor) as valor " +
                " from conta1 c " +
                " inner join movimentacao1 m on c.id_conta = m.id_conta_a " +
                " where m.id_periodo_a = " + idPeriodo +
                " group by nome_conta, id_conta " 
                " order by nome_conta";
        let ds = Conta.dataSource;
        ds.connector.query(sql, callback);
    }
};
