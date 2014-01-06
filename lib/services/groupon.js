'use strict';

angular.module('gdi2290.groupon', []);
.provider('Groupon', function() {
  // hold on to our generic variables
  var apiKey = '';
  var baseUrl = '//api.groupon.com/v2';

  // A function to set the api key
  this.setApiKey = function(key) {
    apiKey = key || apiKey;
  };

  this.$get = [function() {
    // Service definition
  }];
});
