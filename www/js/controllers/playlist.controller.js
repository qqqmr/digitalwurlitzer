app = angular.module('starter')
.controller('PlaylistController', function($scope, BarApi, SelectionCache, $http, $log) {
    $scope.currentBar = SelectionCache.getActiveBar();
    $scope.currentPlaylist = null;

    BarApi.getActiveVotingList().then(function success(response) {
        $scope.currentPlaylist = response.data.activeVoting;
        _.forEach($scope.currentPlaylist.future, function(song){
            song.vindex = 1000;
            _.forEach(song.votes, function(vote){
                song.vindex = song.vindex + vote.points;
            })
            console.log(song.vindex)
        })
        $log.debug(response);
    }, function error(response) {
        $log.debug(response)
    });
})