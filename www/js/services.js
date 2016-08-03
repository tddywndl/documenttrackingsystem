angular.module('starter.services', [])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var check = $q.defer();
            var promise = check.promise;
 
            if (name == '1' && pw == '1') {
                check.resolve('Welcome ' + name + '!');
            } else {
                check.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

