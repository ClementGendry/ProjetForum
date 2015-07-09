(function(angular){

    var Forus = angular.module('Forus', [require('angular-ui-router'), require('angular-animate')]);

    Forus.config(require('./routing.js'));

    Forus.controller('AppController', require('./controller/AppController.js'));
    Forus.controller('TodoController', require('./controller/TodoController.js'));
    Forus.controller('HomeController', require('./controller/HomeController.js'));
    Forus.controller('CategoryController', require('./controller/CategoryController.js'));


    Forus.run(['$rootScope', function ($rootScope) {
            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                $rootScope.isOnHome = toState.name == 'home';
            })
        }
    ]);


    Forus.controller('TabsetController', require('./controller/TabsetController.js'));
    Forus.directive('tabset', require('./directive/TabsetDirective.js'));
    Forus.directive('tab', require('./directive/TabDirective.js'));
    Forus.directive('tabHeadingTransclude', require('./directive/TabHeadingTranscludeDirective.js'));
    Forus.directive('tabContentTransclude', require('./directive/TabContentTranscludeDirective.js'));


})(require('angular'));
