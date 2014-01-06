'use strict';

angular.module('gdi2290.groupon', [])
.provider('Groupon', function() {
  // hold on to our generic variables
  var _apiKey = '';
  var _baseUrl = '//api.groupon.com/v2';

  // A function to set the api key
  this.setApiKey = function(key) {
    _apiKey = key || _apiKey;
  };

  this.$get = [function() {
    // Service definition
  }];
});
