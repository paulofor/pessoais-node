'use strict';

var app = require('../../server/server');


/*
select * 
from
(
(select id_sistema as id, nome, 'SISTEMA' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo
, SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos
from tempo_tarefa
inner join tarefa on id_tarefa = id_tarefa_cp
inner join sistema on id_sistema = tarefa.id_sistema_er
where 
year(hora_inicio) = 2011
group by id_sistema, nome)
union all
(select id_tema as id, nome, 'TEMA' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo
, SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos
from tempo_tarefa
inner join tarefa on id_tarefa = id_tarefa_cp
inner join tema on id_tema = tarefa.id_tema_pa
where 
year(hora_inicio) = 2011
group by id_tema, nome) 
union all
(select id_projeto as id, nome, 'PROJETO' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo
, SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos
from tempo_tarefa
inner join tarefa on id_tarefa = id_tarefa_cp
inner join projeto on id_projeto = tarefa.id_projeto_pa
where 
year(hora_inicio) = 2011
group by id_projeto, nome) 
union all
(select id_projeto_pmbok as id, nome, 'PMBOK' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo 
 ,SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos 
 from projeto_pmbok 
 inner join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = id_projeto_pmbok 
 inner join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto
 inner join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega 
 where 
 year(hora_inicio) = 2011
 group by id_projeto_pmbok, nome)
) as tab order by tempo desc

*/





module.exports = function (Gerprojprojetopmbok) {


    /**
    * 
    * @param {number} ano 
    * @param {array} saida 
    * @param {Function(Error, array)} callback
    */

    Gerprojprojetopmbok.TempoAno = function (ano, callback) {
        /*
        let sql = 'select id_projeto_pmbok, nome, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo ' +
            ' , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos ' +
            ' from projeto_pmbok ' +
            ' inner join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = id_projeto_pmbok ' +
            ' inner join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto ' +
            ' inner join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega ' +
            ' where ' +
            ' year(hora_inicio) = ' + ano +
            ' group by id_projeto_pmbok, nome ' +
            ' order by tempo desc ';
        */

       let sql = " select * " + 
        " from " +
        " ( " +
        " (select id_sistema as id, nome, 'Sistema' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos " +
        " from tempo_tarefa " +
        " inner join tarefa on id_tarefa = id_tarefa_cp " +
        " inner join sistema on id_sistema = tarefa.id_sistema_er " +
        " where " +
        " year(hora_inicio) = " + ano +
        " group by id_sistema, nome) " +
        " union all " +
        " (select id_tema as id, nome, 'Tema' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos " +
        " from tempo_tarefa " +
        " inner join tarefa on id_tarefa = id_tarefa_cp " +
        " inner join tema on id_tema = tarefa.id_tema_pa " +
        " where " +
        " year(hora_inicio) = " + ano + 
        " group by id_tema, nome) " +
        " union all " +
        " (select id_projeto as id, nome, 'Projeto' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos " +
        " from tempo_tarefa " +
        " inner join tarefa on id_tarefa = id_tarefa_cp " +
        " inner join projeto on id_projeto = tarefa.id_projeto_pa " +
        " where " +
        " year(hora_inicio) = " + ano +
        " group by id_projeto, nome) " +
        " union all " +
        " (select id_projeto_pmbok as id, nome, 'Pmbok' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " ,SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos  " +
        " from projeto_pmbok " +
        " inner join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = id_projeto_pmbok " +
        " inner join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto " +
        " inner join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega " +
        " where " +
        " year(hora_inicio) = " + ano +
        " group by id_projeto_pmbok, nome) " +
        " ) as tab order by tempo desc";
       
        //console.log('sql:' + sql);

        let ds = Gerprojprojetopmbok.dataSource;
        ds.connector.query(sql, (err,resultado) => {
            //console.log('err', err);
            //let tempoTotal = resultado.reduce((total, item) => { total + 1 });

            var total = resultado.reduce((acumulador, item, indice, original) => {
            return acumulador += item.segundos;
            }, 0);
            var resultado2 = resultado.map((item) => {
                var perc = item.segundos / total;
                item['percentual'] = perc * 100;
                return item;
            })

            //console.log('Total' , total);
            callback(err,resultado2);
        });

    };

    /**
    * 
    * @param {number} mes 
    * @param {number} ano 
    * @param {Function(Error, array)} callback
    */
    Gerprojprojetopmbok.TempoMes = function (mes, ano, callback) {
        let sql = 'select id_projeto_pmbok, nome, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo ' +
            ' , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos ' +
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
        ds.connector.query(sql, (err,resultado) => {
            //let tempoTotal = resultado.reduce((total, item) => { total + 1 });

            var total = resultado.reduce((acumulador, item, indice, original) => {
            return acumulador += item.segundos;
            }, 0);
            var resultado2 = resultado.map((item) => {
                var perc = item.segundos / total;
                item['percentual'] = perc * 100;
                return item;
            })

            //console.log('Total' , total);
            callback(err,resultado2);
        });
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
            ' , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos ' +
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
        ds.connector.query(sql, (err,resultado) => {
            //let tempoTotal = resultado.reduce((total, item) => { total + 1 });

            var total = resultado.reduce((acumulador, item, indice, original) => {
            return acumulador += item.segundos;
            }, 0);
            var resultado2 = resultado.map((item) => {
                var perc = item.segundos / total;
                item['percentual'] = perc * 100;
                return item;
            })

            //console.log('Total' , total);
            callback(err,resultado2);
        });

    };


};
