//importar a biblioteca do express
var express = require('express');
//referencia a biblioteca mysql
const dbMysql = require('mysql');

//criar um objeto do express
var app = express();

//configurações da base de dados
const db = dbMysql.createConnection({
    host: "db4free.net",
    user: "ikejima",
    password: "saiko2018",
    database: "kirarinha"
});

//Conectar na base de dados
db.connect(function(erro){
    if(erro)
    throw erro;
    console.log("Conectado com sucesso!");
});

//Executar Queries
function executarSql(sql, response)
{
    db.query(sql, function(erros, results, fields){
        if(erros)
        response.json(erros);
        else
        response.json(results);
        });
        console.log('Query executando com sucesso!');
}

//Retornar usuários
app.get('/usuarios', function(request, response){
    const sqlQuery = "select * from usuarios";
    executarSql(sqlQuery, response);
});

//Retornar apenas um usuário
app.get('/usuarios/:id', function(request, response){
    let id = request.params.id;
    const sqlQuery = `select * from usuarios where idUsuario = ${id} ;`;
    executarSql(sqlQuery,response);
});

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