var TodoController = ['$scope', '$state', '$window',function($scope, $state, $window) {
    $scope.name = $state.$current.name;
    $scope.url = $state.$current.url.source;

    $scope.back = function() {
        $window.history.back();
    }
}];

module.exports = TodoController;
