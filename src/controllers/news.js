//Exporta a função index deixando disponível para ser usada em outras partes do projeto 
module.exports.index = function (application, req, res) {

    //Cria uma instância de modulo news que será usado para acessar dados da noticia
    var newsModel = new application.src.models.news();

    //Chama o metdo getlastnews do model para buscar as últimas noticias, esse próximo metodo recebe a função de callback que será executada após a consulta ser concluída
    newsModel.getLastNews(function (err, result) {

        //Se a consulta der certo o result terá as noticias recuperadas do 'banco de dados', o metodo res.render é chamado para renderizar a view - news/index e passa as noticas obtida no result  para a view, onde será exibida para o usuário
        res.render("news/index", { news: result });
    })
}