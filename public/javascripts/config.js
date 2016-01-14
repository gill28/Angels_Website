myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/welcome.html'
    }).when('/admin', {
            templateUrl: 'views/admin.html'
        })
        .when('/category/:tag', {
            templateUrl: 'views/category.html'
        }).otherwise({
        redirectTo: '/'
    });

}]);