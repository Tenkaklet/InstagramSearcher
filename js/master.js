angular.module('InstagramApp', ['ngAnimate'])
.controller('InstaController', ['$scope','$http', '$q', '$timeout', function ($scope, $http, $q, $timeout) {

    $scope.tempVariable = '';
    $scope.showResults = false;
    $scope.tagKeyword = '';
    $scope.pictures = [];
    $scope.InstagramSearch = function () {
            $timeout(function () {
                money();
            }, 2000);
            $scope.query = true;
            var tag = $scope.tagKeyword;
            $scope.tempVariable = tag;
            var baseURL = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?';

            var params = {
                client_id: '0115b5f0a43746a48c75c62e2fb78e72',
                callback: 'JSON_CALLBACK',
            };
            function showRes () {
                $scope.showResults = true;
            }

            function money () {
            $http.jsonp(baseURL, {params: params})
                .then(function(response) {
                    $scope.pictures = response.data.data;
                    console.log($scope.pictures);
                    showRes();

                    $scope.query = false;
                }, function (response) {
                    console.log('You failed!');
                });
            }
            $scope.tagKeyword = '';
    };
}]);
