'use strict';

/**
 * @ngdoc function
 * @name angularGmailApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGmailApp
 */
angular.module('angularGmailApp')
  .controller('InboxCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
