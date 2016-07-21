angular.module('starter.controllers', [])

    //This is my user define login
.controller('AppCtrl', function($scope, LoginService, $ionicPopup, $location) {
    $scope.data = {};
     
     $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $location.path('/app/home')
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }


    $scope.register = function() {
        $location.path('/login');
    }

    $scope.logout = function() {
        $location.path('/login');
    }

    $scope.cancel = function() {
        $location.path('/login');
    }
})