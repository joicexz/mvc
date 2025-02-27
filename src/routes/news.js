//Exporta uma função que recebe o objeto 'application' como parametro
//Essa função configura uma rota na aplicação

module.exports = function(application){
    //Define uma rota HTTP - GET para a raiz da aplicação ('/')
    application.get('/'.function(req,res){
        //Quando a rota raiz '/' é acessada  chama o metodo 'index' do controller 'news'
        //Passa 'application'. 'req' e 'res' para o metodo 'index'
        application.src.controllers.news.index(application, req, res);
    });
}