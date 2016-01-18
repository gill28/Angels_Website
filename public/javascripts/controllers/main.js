myApp.controller('mainCtrl', function ($scope, $http) {

    $scope.categorys = [];
    $http.get('/data/').then(function (res) {
        $scope.categorys = res.data;
    });

        $scope.showModal = false;
        $scope.toggleModal = function() {
            $scope.showModal = !$scope.showModal
    }
});

myApp.controller('categoryCtrl', function($scope, $http, $routeParams){


    $scope.categorys = [];
    $http.get('/data/').then(function (res) {
        $scope.categorys = res.data;
        for (var i = 0; i < $scope.categorys.length; i++) {
            if ($scope.categorys[i].tag === $routeParams.tag) {
                $scope.category = $scope.categorys[i];
                break;

            }
        }
    });
});




