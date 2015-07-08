var Routing = function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise("/accueil");

$stateProvider

    .state('home', {
        url: "/accueil",
        templateUrl: "partial/home.html",
        controller: 'HomeController'
    })

    .state('login', {
        url: "/connexion",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

    .state('register', {
        url: "/inscription",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

    .state('category', {
        url: "/categorie/:category",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

    .state('article', {
        url: "/article/:id",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

    .state('article-creation', {
        url: "/creation/article",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

};

module.exports = ['$stateProvider', '$urlRouterProvider', Routing];
