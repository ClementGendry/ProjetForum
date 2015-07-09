var TabsetDirective = function() {
    return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {},
        controller: 'TabsetController',
        templateUrl: 'partial/tabset.html'
    };
};

module.exports = TabsetDirective;
