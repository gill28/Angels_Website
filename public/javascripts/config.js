myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/welcome.html'
    })
        .when('/category/:tag', {
            templateUrl: 'views/category.html'
        }).otherwise({
        redirectTo: '/'
    });

}]);

//myAdmin.config(['$routeProvider', function($routeProvider){
//    $routeProvider.when('/admin', {
//        templateUrl: 'views/admin.html'
//    });
//}]);