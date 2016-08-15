angular.module('controllers', [])

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $location) {
    $scope.data = {};
     
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $location.path('/app/search')
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

    $scope.cancel = function() {
        $location.path('/login');
    }
})

.controller('DashCtrl', function($scope, $location) {

    $scope.logout = function() {
        $location.path('/login');
    }
})

.controller('TrackCtrl', function($scope, TrackingService) {

    $scope.tracking = TrackingService.all();
    $scope.remove = function(chat) {
        TrackingService.remove(tracking);
    };
})