'use strict';

var app = require('../../server/server');

module.exports = function (Gerprojprojetopmbok) {


    /**
    * 
    * @param {number} ano 
    * @param {array} saida 
    * @param {Function(Error, array)} callback
    */

    Gerprojprojetopmbok.TempoAno = function (ano, callback) {
        let sql = 'select id_projeto_pmbok, nome, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo ' +
            ' from projeto_pmbok ' +
            ' inner join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = id_projeto_pmbok ' +
            ' inner join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto ' +
            ' inner join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega ' +
            ' where ' +
            ' year(hora_inicio) = ' + ano +
            ' group by id_projeto_pmbok, nome ' +
            ' order by tempo desc ';
        let ds = Gerprojprojetopmbok.dataSource;
        ds.connector.query(sql, callback);
    };

    /**
    * 
    * @param {number} mes 
    * @param {number} ano 
    * @param {Function(Error, array)} callback
    */
    Gerprojprojetopmbok.TempoMes = function (mes, ano, callback) {
        let sql = 'select id_projeto_pmbok, nome, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo ' +
            ' from projeto_pmbok ' +
            ' inner join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = id_projeto_pmbok ' +
            ' inner join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto ' +
            ' inner join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega ' +
            ' where ' +
            ' month(hora_inicio) = ' + mes +
            ' and year(hora_inicio) = ' + ano +
            ' group by id_projeto_pmbok, nome ' +
            ' order by tempo desc ';
        let ds = Gerprojprojetopmbok.dataSource;
        ds.connector.query(sql, callback);
    };

    /**
    * 
    * @param {number} dia 
    * @param {number} mes 
    * @param {number} ano 
    * @param {Function(Error, array)} callback
    */
    Gerprojprojetopmbok.TempoDia = function (dia, mes, ano, callback) {
        let sql = 'select id_projeto_pmbok, nome, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo ' +
            ' from projeto_pmbok ' +
            ' inner join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = id_projeto_pmbok ' +
            ' inner join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto ' +
            ' inner join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega ' +
            ' where ' +
            ' day(hora_inicio) = ' + dia +
            ' and month(hora_inicio) = ' + mes +
            ' and year(hora_inicio) = ' + ano +
            ' group by id_projeto_pmbok, nome ' +
            ' order by tempo desc ';
        let ds = Gerprojprojetopmbok.dataSource;
        ds.connector.query(sql, callback);
    };


};
