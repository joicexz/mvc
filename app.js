// Importa o modulo 'express', framework web para node.js
var express = require('express');

//Importa o modulo 'consign' que é usado para autoload (autocarregamento) de scripts, facilitando o gerenciamento de rotas, models e controllers
var consign = require('consign');

//Cria uma instância do express
var app = express();

//Configura a engine de visualização como 'ejs' para renderizar arquivos .ejs
app.set('view engine', 'ejs');

//Define o diretório onde estão localizadas as views (template EJS)
app.set('views', './src/views')

//Configura o 'consign' para incluir automaticamente as rotas models e controllers na aplicação
consign()
    .include('src/routes') //Inclui as rotas, carregando os arquivos pra pasta 'src/routes'
    .then('src/models') //Inclui os models, carregando os arquivos pra pasta 'src/models'
    .then('src/controllers') //Inclui os controllers, carregando os arquivos pra pasta 'src/controllers'
    .into(app); //Injeta essas dependências na instância do express(app)