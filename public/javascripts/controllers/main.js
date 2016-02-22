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

        window.setTimeout(function() {
            $('.js-modal').on('click', function(){
                var $modal = $('.modal');
                var $modalInner = $modal.find('.modal-inner');
                var bookIndex = $(this).index();
                var categorynum = $('.js-category').data('categorynum');
                var category = $scope.category.books[bookIndex];
                var source = $('.modalTemplate').html();
                var template = Handlebars.compile(source);
                var html = template(category);
                $modalInner.html(html);
                $modal.show();
            });

            $('.modal').on('click', function(){
                $('.modal').hide();
            });
        }.bind(this), 500);

        for (var i = 0; i < $scope.categorys.length; i++) {
            if ($scope.categorys[i].tag === $routeParams.tag) {
                $scope.category = $scope.categorys[i];
                $scope.categorynum = i;
                break;

            }
        }
    });
});




