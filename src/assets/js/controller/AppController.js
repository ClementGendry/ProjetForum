var AppController = function($scope, $rootScope, $stateParams) {

    $scope.toggleProfileDropdown = function() {
        $scope.profileDropdownIsVisible = !$scope.profileDropdownIsVisible;
    };

    $rootScope.searchQuery = {
        input: ''
    }

};

module.exports = ['$scope', '$rootScope', '$stateParams', AppController];
