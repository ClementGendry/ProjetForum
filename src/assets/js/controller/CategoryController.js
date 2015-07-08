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

    $scope.posts = [
        {
            "id": 0,
            "auhtor": "Velez Griffith",
            "isSuccess": false,
            "created_at": new Date(),
            "title": "Koffee",
            "messages": 246,
            "likes": 25,
            "views": 1365
        },
        {
            "id": 1,
            "auhtor": "Edith Crosby",
            "isSuccess": true,
            "created_at": new Date(),
            "title": "Newcube",
            "messages": 317,
            "likes": 20,
            "views": 1726
        },
        {
            "id": 2,
            "auhtor": "Jodi Sosa",
            "isSuccess": false,
            "created_at": new Date(),
            "title": "Maroptic",
            "messages": 324,
            "likes": 38,
            "views": 1488
        },
        {
            "id": 3,
            "auhtor": "Maricela Winters",
            "isSuccess": false,
            "created_at": new Date(),
            "title": "Kinetica",
            "messages": 157,
            "likes": 34,
            "views": 1900
        },
        {
            "id": 4,
            "auhtor": "Valdez Fields",
            "isSuccess": false,
            "created_at": new Date(),
            "title": "Digitalus",
            "messages": 354,
            "likes": 26,
            "views": 542
        },
        {
            "id": 5,
            "auhtor": "Turner Matthews",
            "isSuccess": true,
            "created_at": new Date(),
            "title": "Comtent",
            "messages": 373,
            "likes": 34,
            "views": 1954
        },
        {
            "id": 6,
            "auhtor": "Espinoza Hooper",
            "isSuccess": false,
            "created_at": new Date(),
            "title": "Kindaloo",
            "messages": 163,
            "likes": 24,
            "views": 1214
        }
    ];

    console.log($stateParams.slug);

};

module.exports = ['$scope', '$rootScope', '$stateParams', CategoryController];
