var AppController = function($scope, $rootScope, $stateParams) {

    $scope.toggleProfileDropdown = function() {
        $scope.profileDropdownIsVisible = !$scope.profileDropdownIsVisible;
    }

};

module.exports = ['$scope', '$rootScope', '$stateParams', AppController];
