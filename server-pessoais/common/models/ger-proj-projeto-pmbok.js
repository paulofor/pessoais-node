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
    * @param {Function(Error, array)} callback
    */
    Gerprojprojetopmbok.ProgramacaoSemanal = function(callback) {
        let sql = " select nome, tempo as segundos, sec_to_time(tempo) as tempo " +
        " from " +
        " ( " +
        " select projeto_pmbok.nome, sum(time_to_sec(tempo_previsto)) as tempo " +
        " from projeto_pmbok " +
        " inner join alocacao_tempo2 on alocacao_tempo2.id_projeto_pmbok_pa = projeto_pmbok.id_projeto_pmbok " +
        " where id_usuario_p = 1 " +
        " group by projeto_pmbok.nome " +
        " ) as tab " +
        " where tempo <> 0 " +
        " order by tempo desc ";
        let ds = Gerprojprojetopmbok.dataSource;
        ds.connector.query(sql, (err,resultado) => {
             var total = resultado.reduce((acumulador, item, indice, original) => {
            return acumulador += item.segundos;
            }, 0);
            var resultado2 = resultado.map((item) => {
                var perc = item.segundos / total;
                item['percentual'] = perc * 100;
                return item;
            })
            callback(err,resultado2);
        });
    };
  


    /**
    * 
    * @param {Function(Error, array)} callback
    */
    Gerprojprojetopmbok.DetalheDia = function(callback) {
        let sql = " select distinct projeto_pmbok.* " +
        "  from projeto_pmbok " +
        "  inner join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = projeto_pmbok.id_projeto_pmbok " +
        "  inner join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = entrega_projeto.id_entrega_projeto " +
        "  inner join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = iteracao_entrega.id_iteracao_entrega " +
        "  where date_format(hora_inicio,'%Y-%m-%d') = date_format(date_sub(now(),interval 2 hour),'%Y-%m-%d') " +
        "  and tempo_tarefa.hora_inicio <> tempo_tarefa.hora_fim " +
        "  and date_format(hora_inicio,'%H') > '02' " +
        "  order by hora_inicio ";
        let ds = Gerprojprojetopmbok.dataSource;
        ds.connector.query(sql,callback);
    };


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
        " , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos, " +
        " '-' as objetivo, '-' as resultado " +
        " from tempo_tarefa " +
        " inner join tarefa on id_tarefa = id_tarefa_cp " +
        " inner join sistema on id_sistema = tarefa.id_sistema_er " +
        " where " +
        " year(hora_inicio) = " + ano +
        " group by id_sistema, nome) " +
        " union all " +
        " (select id_tema as id, nome, 'Tema' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos, " +
        " '-' as objetivo, '-' as resultado " +
        " from tempo_tarefa " +
        " inner join tarefa on id_tarefa = id_tarefa_cp " +
        " inner join tema on id_tema = tarefa.id_tema_pa " +
        " where " +
        " year(hora_inicio) = " + ano + 
        " group by id_tema, nome) " +
        " union all " +
        " (select id_projeto as id, nome, 'Projeto' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos, " +
        " '-' as objetivo, '-' as resultado " +
        " from tempo_tarefa " +
        " inner join tarefa on id_tarefa = id_tarefa_cp " +
        " inner join projeto on id_projeto = tarefa.id_projeto_pa " +
        " where " +
        " year(hora_inicio) = " + ano +
        " group by id_projeto, nome) " +
        " union all " +
        " (select id_projeto_pmbok as id, nome, 'Pmbok' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " ,SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos,  " +
        " objetivo, resultado " +
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

        let sql = " select * " + 
        " from " +
        " ( " +
        " (select id_sistema as id, nome, 'Sistema' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos " +
        " from tempo_tarefa " +
        " inner join tarefa on id_tarefa = id_tarefa_cp " +
        " inner join sistema on id_sistema = tarefa.id_sistema_er " +
        " where " +
        ' day(hora_inicio) = ' + dia +
        ' and month(hora_inicio) = ' + mes +
        ' and year(hora_inicio) = ' + ano +
        " group by id_sistema, nome) " +
        " union all " +
        " (select id_tema as id, nome, 'Tema' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos " +
        " from tempo_tarefa " +
        " inner join tarefa on id_tarefa = id_tarefa_cp " +
        " inner join tema on id_tema = tarefa.id_tema_pa " +
        " where " +
        ' day(hora_inicio) = ' + dia +
        ' and month(hora_inicio) = ' + mes +
        ' and year(hora_inicio) = ' + ano +
        " group by id_tema, nome) " +
        " union all " +
        " (select id_projeto as id, nome, 'Projeto' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " , SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos " +
        " from tempo_tarefa " +
        " inner join tarefa on id_tarefa = id_tarefa_cp " +
        " inner join projeto on id_projeto = tarefa.id_projeto_pa " +
        " where " +
        ' day(hora_inicio) = ' + dia +
        ' and month(hora_inicio) = ' + mes +
        ' and year(hora_inicio) = ' + ano +
        " group by id_projeto, nome) " +
        " union all " +
        " (select id_projeto_pmbok as id, nome, 'Pmbok' as tipo, SEC_TO_TIME(SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio))) as tempo " +
        " ,SUM(TIME_TO_SEC(hora_fim) - TIME_TO_SEC(hora_inicio)) as segundos  " +
        " from projeto_pmbok " +
        " inner join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = id_projeto_pmbok " +
        " inner join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto " +
        " inner join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega " +
        " where " +
        ' day(hora_inicio) = ' + dia +
        ' and month(hora_inicio) = ' + mes +
        ' and year(hora_inicio) = ' + ano +
        " group by id_projeto_pmbok, nome) " +
        " ) as tab order by tempo desc";


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
