angular.module('InstagramApp', [])
.controller('InstaController', ['$scope','$http', function ($scope, $http) {
    $scope.pictures = [];
    $scope.InstagramSearch = function () {
        var tag = $scope.tagKeyword;
        var baseURL = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?';

        var params = {
            client_id: '0115b5f0a43746a48c75c62e2fb78e72',
            callback: 'JSON_CALLBACK',
        };
        $http.jsonp(baseURL, {params: params})
        .then(function(response) {
            $scope.pictures = response.data.data;
            console.log($scope.pictures);
            $scope.InstaForm.$setPristine();
        }, function (response) {
            console.log('You failed!');
        });
    };
}]);
