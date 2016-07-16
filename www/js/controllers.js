angular.module('starter.controllers', [])

//This is my user define login
.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('welcome');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
    $scope.register = function() {
        $state.go('register');
    }
    $scope.logout = function() {
        $state.go('login');
    }
    $scope.cancel = function() {
        $state.go('login');
    }
})