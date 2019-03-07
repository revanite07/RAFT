var app = angular.module('tlApp', []);

app.controller('tlController', function ($scope, $http) {
    $scope.delete = function (deletingId, index) {
        $http.delete("/api/locations/" + deletingId);
        location.reload();
    };
    
    $http.get("/api/user_data").then(function (response) {
        $scope.destinations = response.data;
    })
});