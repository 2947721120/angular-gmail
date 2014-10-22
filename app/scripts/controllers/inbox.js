'use strict';

/**
 * @ngdoc function
 * @name angularGmailApp.controller:InboxCtrl
 * @description
 * # InboxCtrl
 * Controller of the angularGmailApp
 */
angular.module('angularGmailApp')
  .controller('InboxCtrl', function ($scope, InboxFactory) {
    InboxFactory.getMessages()
    	.success()
  });
