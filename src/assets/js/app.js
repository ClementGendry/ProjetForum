(function(angular){

    var Forus = angular.module('Forus', [require('angular-ui-router'), require('angular-animate')]);

    Forus.config(require('./routing.js'));

    Forus.run(['$rootScope', '$state', function ($rootScope, $state) {
            $rootScope.$state = $state;
        }
    ]);

    Forus.controller('TodoController', require('./controller/TodoController.js'));
    Forus.controller('HomeController', require('./controller/HomeController.js'));
    Forus.controller('CategoryController', require('./controller/CategoryController.js'));

})(require('angular'));
