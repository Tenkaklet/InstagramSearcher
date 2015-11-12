angular.module('InstagramApp', [])
.controller('InstaController', ['$scope','$http', '$q', '$timeout', function ($scope, $http, $q, $timeout) {


    function wait() {
    return $q(function(resolve, reject){
      $timeout(function() {
          resolve();
  }, 80000000);
    });
}

    $scope.pictures = [];
    $scope.InstagramSearch = function () {
        $scope.query = true;
        wait();
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
            $scope.query = false;
        }, function (response) {
            console.log('You failed!');
        });
    };
}]);
