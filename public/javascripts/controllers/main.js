myApp.controller('mainCtrl', function ($scope, $http) {

    $scope.categorys = [];
    $http.get('/data/').then(function (res) {
        $scope.categorys = res.data;
    });

    //$scope.toggleModal = function(modalName){
    //    console.log(modalName);
    //    $scope[modalName] = !$scope[modalName];
    //    console.log($scope[modalName]);
    //
    //};
});

myApp.controller('catetoryCtrl', function($scope, $http, $routeParams){

    console.log($scope.categorys);
    for (var i = 0; i < $scope.categorys.length; i++) {
        if ($scope.categorys[i].tag === $routeParams.tag) {
            $scope.category = $scope.categorys[i];
            break;
        }
    }
    console.log($scope.category.books);
})