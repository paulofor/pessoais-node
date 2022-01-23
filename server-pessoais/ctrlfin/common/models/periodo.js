'use strict';

module.exports = function(Periodo) {
/**
 * 
 * @param {number} meses 
 * @param {Function(Error, array)} callback
 */

 Periodo.TotalPeriodoAplicacao = function(meses, callback) {
    let sql = " select periodo.*, " +
          " ( " +
          " select sum(valor) from movimentacao1 " +
          " inner join conta1 on conta1.id_conta = movimentacao1.id_conta_a " +
          " where movimentacao1.id_periodo_a = periodo.id_periodo " +
          " and conta1.fonte = 'N' " +
          " ) as total " +
        " from lojadigicom01.periodo " +
        " where data_referencia <= now() " +
        " order by data_referencia desc " +
        " limit " + meses;
    let ds = Periodo.dataSource;
    ds.connector.query(sql, callback);
  };



  /**
  * 
  * @param {Function(Error, object)} callback
  */
  Periodo.ObtemCorrente = function(callback) {
    let sql = " select id_periodo as id, data_referencia as dataReferencia, apresentacao from periodo " +
          " where year(data_referencia) = year(now()) " + 
          " and month(data_referencia) = month(now()) ";
    let ds = Periodo.dataSource;
    ds.connector.query(sql, (err,result) => {
      callback(err,result[0]);
    });
  };
};
