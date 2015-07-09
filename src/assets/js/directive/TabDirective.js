var TabDirective = ['$parse', '$log', function($parse, $log) {
    return {
        require: '^tabset',
        restrict: 'EA',
        replace: true,
        templateUrl: 'directive/tab.html',
        transclude: true,
        scope: {
            active: '=?',
            heading: '@',
            onSelect: '&select', //This callback is called in contentHeadingTransclude
            //once it inserts the tab's content into the dom
            onDeselect: '&deselect'
        },
        controller: function() {
            //Empty controller so other directives can require being 'under' a tab
        },
        compile: function(elm, attrs, transclude) {
            return function postLink(scope, elm, attrs, tabsetCtrl) {
                scope.$watch('active', function(active) {
                    if (active) {
                        tabsetCtrl.select(scope);
                    }
                });

                scope.disabled = false;
                if ( attrs.disable ) {
                    scope.$parent.$watch($parse(attrs.disable), function(value) {
                        scope.disabled = !! value;
                    });
                }

                // Deprecation support of "disabled" parameter
                // fix(tab): IE9 disabled attr renders grey text on enabled tab #2677
                // This code is duplicated from the lines above to make it easy to remove once
                // the feature has been completely deprecated
                if ( attrs.disabled ) {
                    $log.warn('Use of "disabled" attribute has been deprecated, please use "disable"');
                    scope.$parent.$watch($parse(attrs.disabled), function(value) {
                        scope.disabled = !! value;
                    });
                }

                scope.select = function() {
                    if ( !scope.disabled ) {
                        scope.active = true;
                    }
                };

                tabsetCtrl.addTab(scope);
                scope.$on('$destroy', function() {
                    tabsetCtrl.removeTab(scope);
                });

                //We need to transclude later, once the content container is ready.
                //when this link happens, we're inside a tab heading.
                scope.$transcludeFn = transclude;
            };
        }
    };
}];

module.exports = TabDirective;
