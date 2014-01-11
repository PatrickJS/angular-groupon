/*
  angular-groupon - v0.1.2 
  2014-01-11
*/
(function(window, angular, undefined) {
    "use strict";
    angular.module("angular-groupon", [ "gdi2290.groupon" ]);
    angular.module("ngGroupon", [ "gdi2290.groupon" ]);
    angular.module("gdi2290.groupon", []);
    "use strict";
    angular.module("gdi2290.groupon", []).provider("Groupon", function() {
        var _apiKey = "";
        var _baseUrl = "https://api.groupon.com/v2";
        var _statusUrl = "https://api.groupon.com";
        this.setApiKey = function(key) {
            _apiKey = key || _apiKey;
        };
        this.setBaseUrl = function(uri) {
            _baseUrl = uri || _baseUrl;
        };
        this.setStatusUrl = function(uri) {
            _statusUrl = uri || _statusUrl;
        };
        function prepareRequest(conf) {
            conf = conf || {};
            conf.callback = "JSON_CALLBACK";
            conf.client_id = _apiKey;
            return conf;
        }
        this.$get = [ "$q", "$http", function($q, $http) {
            var service = {
                getGrouponSays: function(limit, conf) {
                    var dfd = $q.defer();
                    conf = prepareRequest(conf);
                    conf.limit = limit;
                    $http({
                        method: "JSONP",
                        url: _baseUrl + "/groupon_says.json",
                        params: conf
                    }).success(function(data) {
                        dfd.resolve(data);
                    }).error(function(reason) {
                        dfd.reject(reason);
                    });
                    return dfd.promise;
                },
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
                },
                getDeal: function(id, conf) {
                    var dfd = $q.defer();
                    conf = prepareRequest(conf);
                    $http({
                        method: "JSONP",
                        url: _baseUrl + "/deals/" + id + ".json",
                        params: conf
                    }).success(function(data) {
                        dfd.resolve(data);
                    }).error(function(reason) {
                        dfd.reject(reason);
                    });
                    return dfd.promise;
                },
                getDealPosts: function(id, conf) {
                    var dfd = $q.defer();
                    conf = prepareRequest(conf);
                    $http({
                        method: "JSONP",
                        url: _baseUrl + "/deals/" + id + "/posts.json",
                        params: conf
                    }).success(function(data) {
                        dfd.resolve(data);
                    }).error(function(reason) {
                        dfd.reject(reason);
                    });
                    return dfd.promise;
                },
                getDivisions: function(conf) {
                    var dfd = $q.defer();
                    conf = prepareRequest(conf);
                    $http({
                        method: "JSONP",
                        url: _baseUrl + "/divisions.json",
                        params: conf
                    }).success(function(data) {
                        dfd.resolve(data);
                    }).error(function(reason) {
                        dfd.reject(reason);
                    });
                    return dfd.promise;
                },
                getStatus: function(conf) {
                    var dfd = $q.defer();
                    conf = prepareRequest(conf);
                    $http({
                        method: "JSONP",
                        url: _statusUrl + "/status.json",
                        params: conf
                    }).success(function(data) {
                        dfd.resolve(data);
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