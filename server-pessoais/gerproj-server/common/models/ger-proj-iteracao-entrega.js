'use strict';

module.exports = function(Gerprojiteracaoentrega) {


    Gerprojiteracaoentrega.LigaDesliga = function(idIteracao, callback) {
        //console.log('id:' , idIteracao);
        let ds = Gerprojiteracaoentrega.dataSource;
        Gerprojiteracaoentrega.findById(idIteracao, (err,result) => {
            //console.log('Err:' , err);
            let novo = (result.concluida=='S'?'N':'S');
            let sql = "update iteracao_entrega set concluida = '" + novo + "' where id_iteracao_entrega = " + idIteracao;
            ds.connector.query(sql, (err2,result2) => {
                let sqlAtual = "update projeto_pmbok " +
                    " set id_entrega_projeto_atual = ( " +
                    " select id_entrega_projeto from entrega_projeto " +
                    " inner join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = entrega_projeto.id_entrega_projeto " +
                    " where entrega_projeto.id_projeto_pmbok_ee = projeto_pmbok.id_projeto_pmbok " +
                    " and iteracao_entrega.concluida = 'N' " +
                    " order by ordenacao asc " +
                    " limit 1) ";
                ds.connector.query(sqlAtual,callback);    
            });
        })
    }
};
