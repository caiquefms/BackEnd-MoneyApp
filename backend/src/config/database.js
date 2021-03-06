const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney');


// Para Enviar mensagens personalizadas do problema que está ocorrendo no banco de dados
mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório.'"
mongoose.Error.messages.Number.min = 
" O atributo '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =
" O atributo '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
" '{VALUE}' não é um atributo '{PATH}'."