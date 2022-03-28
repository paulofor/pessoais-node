'use strict';
var app = require('../../server/server');
module.exports = function(Movimentacao) {


    Movimentacao.ObtemPorDia = function (dia,mes,ano,callback) {
        let dataRef = ano + '-' + mes.toString().padStart(2,'0') + '-01';
        
        let filtro = {
            'where' : {'dataReferencia' : dataRef}
        }
        console.log('filtro' , filtro);
        this.app.models.Periodo.findOne(filtro, (err,result) => {
            console.log('Periodo:' , result);
            let filtro = {
                'where' : {'and' : [{'dia' : dia } , {'id_periodo_a' : result.id}]},
                'include' : [
                    'contaFonte', 'contaAplicacao' , 'periodoFonte' , 'periodoAplicacao'
                ]
            }
            console.log('filtro:' , JSON.stringify(filtro));
            Movimentacao.find(filtro,callback);
        })
    }


    Movimentacao.CriaEdita = function (item, callback) {
        if (item.parcela>1) {
            
            let valorParcela = item.valor / item.parcela;
            item.valor = valorParcela
            let qtdeParcela = item.parcela 
            let comentarioOriginal = item.comentario;
            for (let i=1;i<=qtdeParcela;i++) {
                item.comentario = comentarioOriginal + " ( " + i + " de " + item.parcela + " )";
                if (i>1) {
                    item.id_periodo_f++;
                    item.id = 0;
                }
                Movimentacao.upsert(item, (err,result) => {
                    console.log('result:' , result);
                })
            }
            callback(null,{"concluido" : "ok"}); 
        } else {
            Movimentacao.upsert(item,callback);
        }
        
    }

    Movimentacao.ConfirmaPorId = function(idMovimentacao, callback) {
        //console.log('idMovimentacao:' , idMovimentacao);
        let sql = "update movimentacao1 set confirmada = 'S' " +
            " where id_movimentacao = " + idMovimentacao;
        let ds = Movimentacao.dataSource;
        //console.log('SQL:' , sql);
        ds.connector.query(sql,callback);
    }
};
