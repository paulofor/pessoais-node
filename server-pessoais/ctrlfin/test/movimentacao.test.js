'use strict';

var assert = require('assert');
var normalizaDataPeriodo = require('../common/models/movimentacao').normalizaDataPeriodo;

assert(normalizaDataPeriodo({apresentacao: 'ago-2026'}) >
    normalizaDataPeriodo({apresentacao: 'jul-2026'}));
var agostoIso = {dataReferencia: '2026-08-01T00:00:00.000Z'};
var julhoIso = {dataReferencia: '2026-07-01T00:00:00.000Z'};
assert(normalizaDataPeriodo(agostoIso) > normalizaDataPeriodo(julhoIso));

var agostoDate = {dataReferencia: new Date('2026-08-01T00:00:00.000Z')};
var julhoDate = {dataReferencia: new Date('2026-07-01T00:00:00.000Z')};
assert(normalizaDataPeriodo(agostoDate) > normalizaDataPeriodo(julhoDate));
assert.strictEqual(normalizaDataPeriodo({apresentacao: 'ago-26'}), 202608);
assert.strictEqual(normalizaDataPeriodo({}), null);

console.log('Testes de período da movimentação concluídos com sucesso.');
