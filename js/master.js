angular.module('InstagramApp', [])
.controller('InstaController', ['$scope','$http', '$q', '$timeout', function ($scope, $http, $q, $timeout) {

    $scope.showResults = false;

    $scope.pictures = [];
    $scope.InstagramSearch = function () {
            $timeout(function() {
                money();
            }, 1000);
            $scope.query = true;
            var tag = $scope.tagKeyword;
            var baseURL = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?';

            var params = {
                client_id: '0115b5f0a43746a48c75c62e2fb78e72',
                callback: 'JSON_CALLBACK',
            };
            function money () {
                $scope.showResults = true;
            $http.jsonp(baseURL, {params: params})


                .then(function(response) {
                    $scope.pictures = response.data.data;
                    console.log($scope.pictures);
                    $scope.InstaForm.$setPristine();
                    $scope.query = false;
                }, function (response) {
                    console.log('You failed!');
                });
            }
            resetKeyword();

    };

    function resetKeyword () {
        $scope.tagKeyword = $scope.tagKeyword;
    }
}]);
