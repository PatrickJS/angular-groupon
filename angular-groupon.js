/*
  angular-groupon - v0.0.1 
  2014-01-05
*/
(function(window, angular, undefined) {
    "use strict";
    angular.module("angular-groupon", [ "gdi2290.groupon" ]);
    angular.module("ngGroupon", [ "gdi2290.groupon" ]);
    angular.module("gdi2290.groupon", []);
    "use strict";
    angular.module("gdi2290.groupon", []).provider("Groupon", function() {
        var _apiKey = "";
        var _baseUrl = "//api.groupon.com/v2";
        this.setApiKey = function(key) {
            _apiKey = key || _apiKey;
        };
        function prepareRequest(conf) {
            conf = conf || {};
            conf.callback = "JSON_CALLBACK";
            conf.client_id = _apiKey;
            return conf;
        }
        this.$get = [ "$q", "$http", function($q, $http) {
            var service = {
                getDeals: function(conf) {
                    var dfd = $q.defer();
                    conf = prepareRequest(conf);
                    $http({
                        method: "JSONP",
                        url: _baseUrl + "/deals.json",
                        params: conf
                    }).success(function(data) {
                        dfd.resolve(data.deals);
                    }).error(function(reason) {
                        dfd.reject(reason);
                    });
                    return dfd.promise;
                }
            };
            return service;
        } ];
    });
})(this, this.angular, void 0);