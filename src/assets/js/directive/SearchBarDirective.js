var SearchBarDirective = ['$state', '$rootScope', function($state, $rootScope) {
    return {
        templateUrl : "directive/search-bar.html",
        replace : true,
        restrict : 'E',
        scope : false,
        link : function (scope, element, attrs){
            element.bind('keydown', function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        $state.transitionTo('category', {slug: $rootScope.searchQuery.input});
                    });

                    event.preventDefault();
                }
            });
        }
    }
}];

module.exports = SearchBarDirective;
