'use strict';

var app = require('../../server/server');

module.exports = function(Gerprojalocacaotempo) {

    Gerprojalocacaotempo.AtualizaListaComProjeto = function(lista,callback) {
        //console.log('Recebi a lista' , lista);
        //var listaProcesso2 = listaVersaoRecurso.lista;
        let contaItem = lista.length * lista[0].gerProjAlocacaotempos.length;
        lista.forEach((item) => {
            //console.log('Lista de plano: ', item.planoExecucaos.length);
            /*
            app.models.PlanoExecucao.bulkUpdate(item.listaProcesso, null, (err, result) => {
                console.log('Erro:', err);
                console.log("Resultado: ", JSON.stringify(result));
            })
            */
            //console.log('Item: ', item);
            
            item.gerProjAlocacaotempos.forEach((alocacaao) => {
                //console.log('Plano: ', JSON.stringify(plano));
                Gerprojalocacaotempo.upsert(alocacaao, (err, result) => {
                    //console.log('Erro:', err);
                    contaItem--;
                    if (contaItem==0) {
                        console.log('Finalizou');
                        app.models.GerProj_ProjetoPmbok.CalculaTempoProjetos(callback)
                    }
                    //console.log("Resultado: ", JSON.stringify(result));
                })
            })


        });
        //console.log('Finalizado');
    }
};
