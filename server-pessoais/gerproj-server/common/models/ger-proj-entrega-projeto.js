'use strict';

var app = require('../../server/server');

module.exports = function(Gerprojentregaprojeto) {


    Gerprojentregaprojeto.FechaEntrega = function(idEntrega, callback) {
        let sql = "update iteracao_entrega set date_final_real = now(), concluida = 'S' where numero_iteracao = 1 and id_entrega_projeto_ra =  " + idEntrega;
        let ds = Gerprojentregaprojeto.dataSource;
        ds.connector.query(sql,callback);
    }


 


    Gerprojentregaprojeto.SobeItem = function(idEntrega, callback) {
        let ds = Gerprojentregaprojeto.dataSource;
        Gerprojentregaprojeto.findById(idEntrega, (err,result) => {
            let sql = "update entrega_projeto set ordenacao = ordenacao - 1 where ordenacao = " + (result.ordenacao + 1);
            ds.connector.query(sql, (err,result) => {
             let sql2 = "update entrega_projeto set ordenacao = ordenacao + 1 where id_entrega_projeto = " + result.id_entrega_projeto;
             ds.connector.query(sql2,callback);
            })
         })
    }

    Gerprojentregaprojeto.DesceItem = function(idEntrega, callback) {
        let ds = Gerprojentregaprojeto.dataSource;
        Gerprojentregaprojeto.findById(idEntrega, (err,result) => {
           let sql = "update entrega_projeto set ordenacao = ordenacao + 1 where ordenacao = " + (result.ordenacao - 1);
           ds.connector.query(sql, (err,result) => {
            let sql2 = "update entrega_projeto set ordenacao = ordenacao - 1 where id_entrega_projeto = " + result.id_entrega_projeto;
            ds.connector.query(sql2,callback);
           })
        })
    }


    Gerprojentregaprojeto.AtualizaEntrega = function(entrega,callback) {
        console.log('AtualizaEntrega:' , entrega);
        if (entrega.id) {
            Gerprojentregaprojeto.upsert(entrega,callback)
        } else {
            let sql1 = "select coalesce(max(ordenacao),0) contador from entrega_projeto " +
            " where id_projeto_pmbok_ee = " + entrega.id_projeto_pmbok_ee;
            let ds = Gerprojentregaprojeto.dataSource;
            ds.connector.query(sql1, (err,result) => {
            let sql2 = "insert into entrega_projeto (descricao,ordenacao,data_criacao,folha,id_projeto_pmbok_ee,tempo_total) " +
                " values ('" + entrega.descricao + "', " + (result[0].contador + 1) + " , now() , 'S' , " +  entrega.id_projeto_pmbok_ee + " , '00:00:00' )";
                ds.connector.query(sql2, (err2,result2) => {
                    let sqlIteracao = "insert into iteracao_entrega (id_entrega_projeto_ra, concluida, numero_iteracao) " +
                        " values (" + result2.insertId + " , 'N' , 1 ) ";
                    console.log(sqlIteracao)
                    ds.connector.query(sqlIteracao, callback);
                })
            })
        }
    }
    
};
