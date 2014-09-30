'use strict';

/**
 * @ngdoc overview
 * @name angularGmailApp
 * @description
 * # angularGmailApp
 *
 * Main module of the application.
 */
angular
  .module('angularGmailApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl',
        controllerAs: 'inbox'
      })
      .when('/inbox/email/:id', {
        templateUrl: 'views/email.html',
        controller: 'EmailCtrl',
        controllerAs: 'email'
      })
      .otherwise({
        redirectTo: '/inbox'
      });
  });
