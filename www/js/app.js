// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'wurlitzer.controllers', 'ngMockE2E'])
.run(function($ionicPlatform) {
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
})

    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

          .state('main-menu', {
            url: '/main-menu',
            templateUrl: '/templates/main-menu.html',
            controller: 'MainMenuController'
          })

          .state('bar-info', {
            cache: false,
            url: '/bar-info/:barId',
            templateUrl: '/templates/bar-info.html',
            controller: 'BarInfoController'
          })

          .state('vote-songs', {
            url: '/vote-songs',
            templateUrl: '/templates/vote-songs.html',
            controller: 'VoteSongsController'
          })

          .state('find-bars', {
            cache: false,
            url: '/find-bars',
            templateUrl: '/templates/find-bars.html',
            controller: 'FindBarsController'
          })

          .state('current-playlist', {
            url: '/current-playlist',
            templateUrl: '/templates/current-playlist.html',
            controller: 'PlaylistController'
          });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/find-bars');
    })

    .controller('NavBarController', function($scope, $ionicHistory, $location, SelectionCache) {
      $scope.goBack = function() {
          
        if($ionicHistory.currentStateName() === "bar-info" && !_.isEmpty(SelectionCache.getActiveBar()))
            $location.url("/main-menu");
        else  
            $ionicHistory.goBack();
      };
    });
