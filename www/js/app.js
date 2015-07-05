"use strict";

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'TunJS' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'TunJS.controllers' is found in controllers.js
angular.module('TunJS', ['ionic', 'ionic.service.core', 'TunJS.controllers'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: 'f77674a0',
    // The public API key all services will use for this app
    api_key: 'b97824bd761ae71be29bf3288b87b4c355b7ac0e9bcdd44e',
    // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
    // gcm_id: 'YOUR_GCM_ID'
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })

  .state('app.members', {
    url: "/members",
    views: {
      'menuContent': {
        templateUrl: "templates/members.html"
      }
    }
  })

  .state('app.jobs', {
    url: "/jobs",
    views: {
      'menuContent': {
        templateUrl: "templates/jobs.html",
        controller: 'JobsCtrl'
      }
    }
  })

  .state('app.job', {
    url: "/jobs/:jobId",
    views: {
      'menuContent': {
        templateUrl: "templates/job.html",
        controller: 'JobCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/jobs');
});
