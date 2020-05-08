//importar a biblioteca do express
var express = require('express');

//criar um objeto do express
var app = express();

//ponto de acesso - endpoint
//request = requisições
//response = resposta para as solicitações
app.get('/', function (request, response) {
    response.send('Mikki Ikejima');
});


app.get('/clientes', function (request, response) {
    let clients = {
        "nome": "Mikki Ikejima",
        "idade": 24
    }
    response.json(clients);
});

//novo endpoint
app.get('/produtos', function (request, response) {
    let produtos = {
        "Nome": "Notebook",
        "Preço": "5K",
        "Peso": "2,5 Kg"
    }
    response.json(produtos);
});
//escutar a porta 3000
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});