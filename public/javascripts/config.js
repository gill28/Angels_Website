myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/welcome.html'
    }).when('/about', {
        templateUrl: 'views/about.html'
    }).when('/category/:tag', {
        templateUrl: 'views/category.html'
    }).when('/contact', {
        templateUrl: 'views/contact.html'
    }).otherwise({
        redirectTo: '/'
    });

}]);

