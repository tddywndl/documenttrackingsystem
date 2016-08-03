angular.module('services', [])

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

.factory('TrackingService', function() {

    tracking = [{
        id:         0,
        trackingNo: '0000',
        origin:     'Procurement Unit',
        date:       new Date(),
        docType:    'Purchase Request',
        status:     'for Signature',
        location:   'Admin'
    }, {
        id:         1,
        trackingNo: '0000',
        origin:     'Admin',
        date:       new Date(),
        docType:    'Purchase Request',
        status:     'for Funds Available',
        location:   'Budget Office'
    }, {
        id:         2,
        trackingNo: '0000',
        origin:     'Budget Office',
        date:       new Date(),
        docType:    'Purchase Request',
        status:     'for Approval',
        location:   'President Office'
    }, {
        id:         3,
        trackingNo: '0000',
        origin:     'President Office',
        date:       new Date(),
        docType:    'Purchase Request',
        status:     'for Request for Quotation',
        location:   'Procurement Unit'
    }, {
        id:         4,
        trackingNo: '0001',
        origin:     'Procurement Unit',
        date:       new Date(),
        docType:    'Purchase Request',
        status:     'for Signature',
        location:   'CAS'
    }, {
        id:         5,
        trackingNo: '0001',
        origin:     'CAS',
        date:       new Date(),
        docType:    'Purchase Request',
        status:     'for Funds Available',
        location:   'Budget Office'
    }, {
        id:         6,
        trackingNo: '0001',
        origin:     'Budget Office',
        date:       new Date(),
        docType:    'Purchase Request',
        status:     'for Approval',
        location:   'President Office'
    }, {
        id:         7,
        trackingNo: '0002',
        origin:     'President Office',
        date:       new Date(),
        docType:    'Purchase Request',
        status:     'for Request for Quotation',
        location:   'Procurement Unit'
    }];
    return {
    all: function() {
      return tracking;
    },
   
    get: function(trackId) {
      for (var i = 0; i < tracking.length; i++) {
        if (tracking[i].id === parseInt(trackId)) {
          return tracking[i];
        }
      }
      return null;
    }
  };
})