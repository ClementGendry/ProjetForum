var TabsetDirective = function() {
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {},
        controller: 'TabsetController',
        templateUrl: 'directive/tabset.html'
    };
};

module.exports = TabsetDirective;
