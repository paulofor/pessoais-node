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

  Periodo.ObtemProximo = function(callback) {
    let sql = " select id_periodo as id, data_referencia as dataReferencia, apresentacao from periodo " +
          " where year(data_referencia) = year(date_add(now(),interval 1 month)) " + 
          " and month(data_referencia) = month(date_add(now(),interval 1 month)) ";
    let ds = Periodo.dataSource;
    ds.connector.query(sql, (err,result) => {
      callback(err,result[0]);
    });
  };

  Periodo.ObtemMaisRecentes = function(meses, callback) {
    let sql = " select id_periodo as id, data_referencia as dataReferencia, apresentacao from periodo " +
      " where data_referencia <= now() order by data_referencia desc limit " + meses; 
    let ds = Periodo.dataSource;
    ds.connector.query(sql, callback);
  }


  Periodo.SaldoPorConta = function(idConta,meses,callback) {
    let sql = " select *, " +
        " ( " +
        " select coalesce(sum(valor),0) from movimentacao1  " +
        " where id_conta_a = " + idConta + " and id_periodo_a = periodo.id_periodo) as aplicacao , " +
        " ( " +
        " select coalesce(sum(valor),0) from movimentacao1  " +
        " where id_conta_f = " + idConta + " and id_periodo_f = periodo.id_periodo) as fonte " +
        " from periodo " +
        " where data_referencia <= DATE_ADD(now(),interval 1 month) " +
        " order by data_referencia desc " +
        " limit " + meses;
    let ds = Periodo.dataSource;
    ds.connector.query(sql,callback);
  }
};
