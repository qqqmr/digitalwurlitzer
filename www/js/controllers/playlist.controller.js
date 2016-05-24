app = angular.module('starter')
.controller('PlaylistController', function($scope, BarApi, SelectionCache, $http, $log) {
    $scope.currentBar = SelectionCache.getActiveBar();
    $scope.currentPlaylist = null;

    BarApi.getActiveVotingList().then(function success(response) {
        $scope.currentPlaylist = response.data.activeVoting;
        $log.debug(response);
    }, function error(response) {
        $log.debug(response)
    });
})