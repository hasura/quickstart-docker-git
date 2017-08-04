// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function($ionicPlatform, hasura) {
    // set your hasura project name
    hasura.setProject('caddy89');

    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  }).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main', {
      cache: false,
      url: '/',
      controller: 'MainCtrl',
      templateUrl: 'views/main.html'
    }).state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'views/login.html'
    }).state('register', {
      url: '/register',
      controller: 'RegisterCtrl',
      templateUrl: 'views/register.html'
    }).state('query', {
      url: '/query',
      controller: 'QueryCtrl',
      templateUrl: 'views/query.html'
    }).state('filestore', {
      url: '/filestore',
      controller: 'FilestoreCtrl',
      templateUrl: 'views/filestore.html'
    })
    ;
    $urlRouterProvider.otherwise("/");
  });
