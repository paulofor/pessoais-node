// Usa URL relativa para que o nginx do container frontend encaminhe /api
// para o container ctrlfin-api na rede Docker.
export const BASE_URL = '';

export const API_VERSION = 'api';

export const URL_UPLOAD = BASE_URL + '/api/containers/container1/upload';
export const URL_IMAGEM = BASE_URL + '/api/containers/container1/download';

export const DS_MES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
