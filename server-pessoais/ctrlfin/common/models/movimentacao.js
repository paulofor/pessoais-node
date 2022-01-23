'use strict';

module.exports = function(Movimentacao) {


    Movimentacao.CriaEdita = function (item, callback) {
        Movimentacao.upsert(item,callback);
    }
};
