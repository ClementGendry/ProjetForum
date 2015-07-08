var CategoryController = function($scope, $rootScope, $stateParams) {

    $scope.categories = [{
        slug: 'sport'
    },{
        slug: 'art'
    },{
        slug: 'cinema'
    },{
        slug: 'musique'
    },{
        slug: 'jeux'
    },{
        slug: 'partage'
    },{
        slug: 'juridique'
    },{
        slug: 'high-tech'
    }];

    $scope.posts = [{}];

    console.log($stateParams.slug);

};

module.exports = ['$scope', '$stateParams', CategoryController];
