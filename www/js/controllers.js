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

    .controller('VoteSongsController', function($scope, $ionicHistory, BarApi, SelectionCache) {
        $scope.vote = function(){
            // to vote for a song, do it this way:
            // active Bar is set, so we can log in to that bar.
            BarApi.login("test", "test").then(
                function succ(res){
                    SelectionCache.setActiveUser(res.data)
                    BarApi.makeVoteFor(SelectionCache.getActiveUser(), { id: 1, "someotherproperties": "xyz"} , 1001)
                        .then(function success(res){
                            console.log(res);
                        }, function err(res){
                            console.log(res);
                        })
                },  function err(res){
                    console.log("Wrong Password or Username!");
                })
        }
    })

    .controller('BarInfoController', function($scope, $ionicHistory) {
  

    })

    .controller('FindBarsController', function($scope, $ionicHistory, SelectionCache) {
        // TODO::
        // !! when the user finally did choose a bar, or better: if he is finally logged into that bar
        // set SelectionCache.setActiveBar(bar) and SelectionCache.setActiveUser(user)
        // this happens already in the NavBarController. delete it there if this block here
        // is a valid selection of a bar (not a hardcoded data[0])
        GlobalBarsApi.getAllBars().then(function(res){
            SelectionCache.setActiveBar(res.data[0]);
        })
    });




