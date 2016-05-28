app = angular.module('starter')
.controller('PlaylistController', function($scope, BarApi, SelectionCache, $http, $log) {
    $scope.currentBar = SelectionCache.getActiveBar();
    $scope.currentPlaylist = null;

    BarApi.getActiveVotingList().then(function success(response) {
        $scope.currentPlaylist = response.data.activeVoting;
        _.forEach($scope.currentPlaylist, function(song){
            _.forEach(song.votes, function(vote){
                song.index = song.index + vote;
            })
        })
        $log.debug(response);
    }, function error(response) {
        $log.debug(response)
    });
})