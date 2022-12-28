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

/*

LISTA EXECUCAO HOJE PLANEJADA


select id_projeto_pmbok, nome, apelido, tempo_previsto, sec_to_time(sum(seg)) tempo_executado,
sec_to_time(time_to_sec(tempo_previsto) - sum(seg)) tempo_restante,
time_to_sec(tempo_previsto) - sum(seg) seg_restante
from
(

select id_projeto_pmbok, nome, apelido, tempo_previsto, 
time_to_sec(tempo_tarefa.hora_fim) - time_to_sec(tempo_tarefa.hora_inicio) as seg,
tempo_tarefa.hora_inicio, tempo_tarefa.hora_fim
from
(
select projeto.id_projeto_pmbok, projeto.nome, projeto.apelido, tempo_previsto
from alocacao_tempo2 tempo
inner join projeto_pmbok projeto on projeto.id_projeto_pmbok = tempo.id_projeto_pmbok_pa
where tempo_previsto <> '00:00:00'
and id_dia_semana_gp = 
(
select 
CASE
    WHEN weekday(DATE_SUB(now(),interval 2 hour))=0 THEN 1
    WHEN weekday(DATE_SUB(now(),interval 2 hour))=1 THEN 2
    WHEN weekday(DATE_SUB(now(),interval 2 hour))=2 THEN 3
	WHEN weekday(DATE_SUB(now(),interval 2 hour))=3 THEN 4
    WHEN weekday(DATE_SUB(now(),interval 2 hour))=4 THEN 5
    ELSE 6
END 
)
) as tab
left outer join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = tab.id_projeto_pmbok 
left outer join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto 
left outer join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega 
and date(date_sub(tempo_tarefa.hora_inicio,interval 2 hour)) = date(DATE_SUB(now(),interval 2 hour))


) as tab2
group by id_projeto_pmbok, nome, apelido, tempo_previsto



*/

/*

TOTAL DIA CORRENTE 

select 
sum(seg_previsto) segPrevisto, sum(seg_executado) segExecutado, 
sum(seg_restante) segFaltando, 
sec_to_time(sum(seg_previsto)) tempoPrevisto, sec_to_time(sum(seg_executado)) tempoExecutado,  
sec_to_time(sum(seg_restante)) tempoFaltando 
from  ( 

select id_projeto_pmbok, nome, apelido, tempo_previsto, sec_to_time(sum(seg)) tempo_executado, 
sec_to_time(time_to_sec(tempo_previsto) - sum(seg)) tempo_restante, 
time_to_sec(tempo_previsto) - coalesce(sum(seg),0) seg_restante , time_to_sec(tempo_previsto) as seg_previsto,
sum(seg) seg_executado
from 
( 
select id_projeto_pmbok, nome, apelido, tempo_previsto,  
time_to_sec(tempo_tarefa.hora_fim) - time_to_sec(tempo_tarefa.hora_inicio) as seg, 
tempo_tarefa.hora_inicio, tempo_tarefa.hora_fim 
from
( 
select projeto.id_projeto_pmbok, projeto.nome, projeto.apelido, tempo_previsto 
from alocacao_tempo2 tempo 
inner join projeto_pmbok projeto on projeto.id_projeto_pmbok = tempo.id_projeto_pmbok_pa 
where tempo_previsto <> '00:00:00' 
and id_dia_semana_gp =  
( 
select  
CASE 
WHEN weekday(DATE_SUB(now(),interval 2 hour))=0 THEN 1 
WHEN weekday(DATE_SUB(now(),interval 2 hour))=1 THEN 2 
WHEN weekday(DATE_SUB(now(),interval 2 hour))=2 THEN 3 
WHEN weekday(DATE_SUB(now(),interval 2 hour))=3 THEN 4 
WHEN weekday(DATE_SUB(now(),interval 2 hour))=4 THEN 5 
ELSE 6 
END  
) 
) as tab 
left outer join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = tab.id_projeto_pmbok  
left outer join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto 
left outer join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega  
and date(date_sub(tempo_tarefa.hora_inicio,interval 2 hour)) = date(DATE_SUB(now(),interval 2 hour)) 
) as tab2 
group by id_projeto_pmbok, nome, apelido, tempo_previsto


) as tab3

*/




module.exports = function (Gerprojprojetopmbok) {

    Gerprojprojetopmbok.FinalizaDia = function(callback) {
        let sql = "update projeto_pmbok " +
            " set tempoCompleto = 0," +
            " executando = 0 ";
        let ds =  Gerprojprojetopmbok.dataSource;
        ds.connector.query(sql,callback);
        
    }


    Gerprojprojetopmbok.LigaDesligaTempoCompleto = function(idProjeto,callback) {
        let sql1 = "update projeto_pmbok  " +
            " set tempoCompleto = tempoCompleto + 1  "  +
            " where id_projeto_pmbok = " + idProjeto; 
        let sql2 = "update projeto_pmbok " +
            " set tempoCompleto = 0 " +
            " where id_projeto_pmbok = " + idProjeto + " and tempoCompleto = 2"
        let ds = Gerprojprojetopmbok.dataSource;
        ds.connector.query(sql1, (err,result) => {
            ds.connector.query(sql2, callback);
        })
    }

    Gerprojprojetopmbok.LigaDesligaExecutando = function(idProjeto,callback) {
        let sql1 = "update projeto_pmbok  " +
            " set executando = executando + 1  "  +
            " where id_projeto_pmbok = " + idProjeto; 
        let sql2 = "update projeto_pmbok " +
            " set executando = 0 " +
            " where id_projeto_pmbok = " + idProjeto + " and executando = 2"
        let ds = Gerprojprojetopmbok.dataSource;
        ds.connector.query(sql1, (err,result) => {
            ds.connector.query(sql2, callback);
        })
    }



    Gerprojprojetopmbok.TotalDiaCorrente = function(callback) {
        let sql = "\n select \n" + 
            " sum(seg_previsto) segPrevisto, sum(seg_executado) segExecutado, \n" + 
            " sum(seg_restante) segFaltando, \n" + 
            " sec_to_time(sum(seg_previsto)) tempoPrevisto, tempoCompleto, sec_to_time(sum(seg_executado)) tempoExecutado,  \n" + 
            " sec_to_time(sum(seg_restante)) tempoFaltando ,\n" + 
            " sum(seg_restante_simples1) segFaltandoPlanejado , \n " +
            " sec_to_time(sum(seg_restante_simples1)) as tempoFaltandoPlanejado, \n " +
            " sum(seg_previsto) - sum(seg_restante_simples1) as segExecutadoPlanejado, \n " +
            " sec_to_time(sum(seg_previsto) - sum(seg_restante_simples1)) as tempoExecutadoPlanejado \n " +
            " from  ( \n" + 
            " select id_projeto_pmbok, nome, apelido, tempo_previsto, tempoCompleto, sec_to_time(sum(seg)) tempo_executado,  \n" + 
            " sec_to_time(time_to_sec(tempo_previsto) - sum(seg)) tempo_restante, \n" + 
            " (time_to_sec(tempo_previsto)) - coalesce(sum(seg),0) seg_restante , \n " +
            " case \n " +
            " when ( (tempoCompleto=1) or (time_to_sec(tempo_previsto)) - coalesce(sum(seg),0) > 0) then  (time_to_sec(tempo_previsto)) - coalesce(sum(seg),0) \n " + 
            " else 0 \n " +
            " end seg_restante_simples1, \n " +
            " (time_to_sec(tempo_previsto)) - coalesce(sum(seg),0) seg_restante_simples2 , \n " +
            " time_to_sec(tempo_previsto) as seg_previsto, \n" + 
            " sum(seg) seg_executado \n" + 
            " from \n" + 
            " ( \n" + 
            " select id_projeto_pmbok, nome, apelido, tempo_previsto,  tempoCompleto, \n" + 
            " time_to_sec(tempo_tarefa.hora_fim) - time_to_sec(tempo_tarefa.hora_inicio) as seg, \n" + 
            " tempo_tarefa.hora_inicio, tempo_tarefa.hora_fim \n" + 
            " from \n" + 
            " ( \n" + 
            " select projeto.id_projeto_pmbok, projeto.nome, projeto.apelido, projeto.tempoCompleto, tempo_previsto \n" +  
            " from alocacao_tempo2 tempo \n" + 
            " inner join projeto_pmbok projeto on projeto.id_projeto_pmbok = tempo.id_projeto_pmbok_pa \n" +  
            " where tempo_previsto <> '00:00:00' \n" + 
            " and id_dia_semana_gp =  \n" + 
            " ( \n" + 
            " select \n" +   
            " CASE \n" + 
            " WHEN weekday(DATE_SUB(now(),interval 1 hour))=0 THEN 1 \n" + 
            " WHEN weekday(DATE_SUB(now(),interval 1 hour))=1 THEN 2 \n" + 
            " WHEN weekday(DATE_SUB(now(),interval 1 hour))=2 THEN 3 \n" + 
            " WHEN weekday(DATE_SUB(now(),interval 1 hour))=3 THEN 4 \n" + 
            " WHEN weekday(DATE_SUB(now(),interval 1 hour))=4 THEN 5 \n" + 
            " ELSE 6 \n" + 
            " END  \n" + 
            " ) \n" + 
            " ) as tab \n" +  
            " left outer join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = tab.id_projeto_pmbok  \n" + 
            " left outer join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto \n" + 
            " left outer join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega  \n" + 
            " and date(date_sub(tempo_tarefa.hora_inicio,interval 1 hour)) = date(DATE_SUB(now(),interval 1 hour)) \n" +  
            " ) as tab2 \n" + 
            " group by id_projeto_pmbok, nome, apelido, tempo_previsto, tempoCompleto \n" + 
            " ) as tab3 \n";
        
        let ds = Gerprojprojetopmbok.dataSource;
        console.log(sql);
        ds.connector.query(sql,(err,result) => {
            console.log('err:' , err);
            console.log('result:', result);
            console.log('sql:', sql);
            if (err) console.log('err:' , err);
            callback(err,result[0]);
        });
    }



    Gerprojprojetopmbok.ListaExecucaoHojePlanejada = function(callback) {
        let sql = " select id_projeto_pmbok, nome, apelido, tempo_previsto, executando, tempoCompleto, sec_to_time(sum(seg)) tempo_executado, \n" +
                " sec_to_time(time_to_sec(tempo_previsto) - sum(seg)) tempo_restante, \n" +
                " time_to_sec(tempo_previsto) - coalesce(sum(seg),0) seg_restante, \n" +
                " time_to_sec(now()) - time_to_sec(max(hora_fim)) intervalo_tempo, \n" +
                " descricao as entregaDescricao \n " +
                " from \n" +
                " # tab2 \n " +
                " ( \n" +
                " select id_projeto_pmbok, nome, apelido, executando, tempoCompleto, tempo_previsto,  \n" +
                " time_to_sec(tempo_tarefa.hora_fim) - time_to_sec(tempo_tarefa.hora_inicio) as seg, \n" +
                " tempo_tarefa.hora_inicio, tempo_tarefa.hora_fim, \n" +
                "  entrega_projeto.* \n" +
                " from \n" +
                " ( \n" +
                " select projeto.id_projeto_pmbok, projeto.nome, projeto.apelido, projeto.executando, projeto.tempoCompleto, tempo_previsto \n" +
                " from alocacao_tempo2 tempo \n" +
                " inner join projeto_pmbok projeto on projeto.id_projeto_pmbok = tempo.id_projeto_pmbok_pa \n" +
                " where tempo_previsto <> '00:00:00' \n" +
                " and id_dia_semana_gp =  \n" +
                " ( \n" +
                " select  \n" +
                " CASE \n" +
                " WHEN weekday(DATE_SUB(now(),interval 1 hour))=0 THEN 1 \n" +
                " WHEN weekday(DATE_SUB(now(),interval 1 hour))=1 THEN 2 \n" +
                " WHEN weekday(DATE_SUB(now(),interval 1 hour))=2 THEN 3 \n" +
                " WHEN weekday(DATE_SUB(now(),interval 1 hour))=3 THEN 4 \n" +
                " WHEN weekday(DATE_SUB(now(),interval 1 hour))=4 THEN 5 \n" +
                " ELSE 6 \n" +
                " END  \n" +
                " ) \n" +
                " ) as tab \n" +
                " left outer join entrega_projeto on entrega_projeto.id_projeto_pmbok_ee = tab.id_projeto_pmbok  \n" +
                " left outer join iteracao_entrega on iteracao_entrega.id_entrega_projeto_ra = id_entrega_projeto  \n" +
                " left outer join tempo_tarefa on tempo_tarefa.id_iteracao_entrega_cp = id_iteracao_entrega \n" + 
                " and date(date_sub(tempo_tarefa.hora_inicio,interval 1 hour)) = date(DATE_SUB(now(),interval 1 hour)) \n" +
                " where concluida = 'N' and numero_iteracao = 1 \n" +
                " order by ordenacao \n" +
                " \n " +
                " ) as tab2 \n" +
                " group by id_projeto_pmbok, nome, apelido, tempo_previsto, executando, tempoCompleto \n" +
                " order by seg_restante desc, id_projeto_pmbok \n";
        let ds = Gerprojprojetopmbok.dataSource;
        console.log(sql);
        ds.connector.query(sql,callback);
    }

    Gerprojprojetopmbok.ListaExecucaoHojeNaoPlanejada = function(callback) {

    }

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
        "  where date_format(hora_inicio,'%Y-%m-%d') = date_format(date_sub(now(),interval 1 hour),'%Y-%m-%d') " +
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
           

            //console.log('Total' , total);
            callback(err,resultado.map((item) => {
                var perc = item.segundos / total;
                item['percentual'] = perc * 100;
                let filtro = {'where' : {'gerProjProjetopmbokId' : item.id} }
                
                app.models.RendaPassivaProjeto.find(filtro, (erro,result) => {
                    console.log('item:' , JSON.stringify(item));
                //    console.log('result:' , JSON.stringify(result));
                //    console.log('erro:' , JSON.stringify(erro));
                    //item['rendaPassivaProjetos'] = result;
                    return item;
                })
            }));
        });

    };

    Gerprojprojetopmbok.CalculaTempoProjetos = function(callback) {
        let sql = "update projeto_pmbok " +
            " set tempo_alocado_semana = (select sec_to_time(sum(time_to_sec(tempo_previsto))) from alocacao_tempo2 " +
            " where alocacao_tempo2.id_projeto_pmbok_pa = projeto_pmbok.id_projeto_pmbok) " +
            " where ativo = 'S' and id_usuario_p = 1";
        let sqlTotalDia = "update dia_semana " +
            " set tempo = (select sec_to_time(sum(time_to_sec(tempo_previsto))) from alocacao_tempo2 where id_dia_semana_gp = id_dia_semana) " +
            " where id_usuario_p = 1"
        let ds = Gerprojprojetopmbok.dataSource;
        ds.connector.query(sql, (err,result) => {
            let sqlTotal = "select sum(time_to_sec(tempo_alocado_semana)) as total " +
                    " from projeto_pmbok where ativo = 'S' and id_usuario_p = 1";

            ds.connector.query(sqlTotal, (err,resultTotal) => {
                let total = resultTotal[0].total;
                let sqlPercentual = "update projeto_pmbok " +
                    " set percentualTempoAlocado = (select (time_to_sec(tempo_alocado_semana) / " + total + ") * 100) " +
                    " where ativo = 'S' and id_usuario_p = 1";
                ds.connector.query(sqlPercentual, (err,result) => {
                    ds.connector.query(sqlTotalDia,callback);
                })
            })
        })
    }


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
