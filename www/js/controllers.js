angular.module('wurlitzer.controllers', [])

    .controller('MainMenuController', function($scope, $location) {

        $scope.show_playlist = function ( path ) {
            $location.url( path );
        };
        $scope.vote_songs = function ( path ) {
            $location.url( path );
        };
        $scope.bar_info = function ( path ) {
            $location.url( path );
        };
        $scope.find_bars = function ( path ) {
            $location.url( path );
        };
    })

    .controller('VoteSongsController', function($scope, $ionicHistory) {

    })

    .controller('BarInfoController', function($scope, $ionicHistory) {
  

    })

    .controller('FindBarsController', function($scope, $ionicHistory, SelectionCache) {
     
        // TODO::
        // !! when the user finally did choose a bar, or better: if he is finally logged into that bar
        // set the following line - 
        
        SelectionCache.setActiveBar(bar);

    });




