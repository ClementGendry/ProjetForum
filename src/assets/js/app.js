(function(angular){

    var Forus = angular.module('Forus', [require('angular-ui-router'), require('angular-animate')]);

    Forus.config(require('./routing.js'));

    Forus.run(['$rootScope', '$state', function ($rootScope, $state) {
            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                $rootScope.isOnHome = toState.name == 'home';
            })
        }
    ]);

    Forus.directive('tab', require('./directive/TabDirective.js'));

    Forus.controller('TodoController', require('./controller/TodoController.js'));
    Forus.controller('HomeController', require('./controller/HomeController.js'));
    Forus.controller('CategoryController', require('./controller/CategoryController.js'));

})(require('angular'));
