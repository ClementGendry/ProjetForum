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

    .state('notifications', {
        url: "/notifications",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

    .state('messages', {
        url: "/messages",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

    .state('account', {
        url: "/mon-compte",
        templateUrl: "partial/mon-compte.html",
        controller: 'AccountController'
    })

    .state('disconnect', {
        url: "/deconnexion",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

    .state('category', {
        url: "/categorie/:slug",
        templateUrl: "partial/category.html",
        controller: 'CategoryController'
    })

    .state('categories', {
        url: "/categories",
        templateUrl: "partial/categories.html",
        controller: 'CategoryController'
    })

    .state('favorites', {
        url: "/favoris",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

    .state('popular-posts', {
        url: "/articles-populaires",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

    .state('recent-posts', {
        url: "/articles-recents",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

    .state('post-details', {
        url: "/article/:id",
        templateUrl: "partial/article-details.html",
        controller: 'PostController'
    })

    .state('post-creation', {
        url: "/creation/article",
        templateUrl: "partial/todo.html",
        controller: 'TodoController'
    })

};

module.exports = ['$stateProvider', '$urlRouterProvider', Routing];
