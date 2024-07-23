'use strict';

module.exports = function(Objetivoprojeto) {

    Objetivoprojeto.AtualizaPorObjetivoGeral = function (objetivoGeralId, listaProjeto, callback) {
        var sqlDelete = "delete from ObjetivoProjeto where objetivoGeralId = " + objetivoGeralId;
        var ds = Objetivoprojeto.dataSource;
        ds.connector.query(sqlDelete, (err1, result1) => {
            //console.log('Retorno 1: ', result1, " - Erro: ",)
            if (err1) {
                callback(err1, null);
                return;
            }
            let conta = 0;
            listaProjeto.forEach((rel) => {
                //delete etapa.processoNegocioEtapaProjetos.id;
                //console.log('create: ', ativo.relGrupoAcaos[0]);
                Objetivoprojeto.create(rel);
                conta++;
                //console.log('Conta:' , conta , ' - Tamanho:' , listaAtivo.length);
                if (conta==listaProjeto.length) {
                    callback(null, { 'result': 'ok' });
                }
            });
        });
    };
};
