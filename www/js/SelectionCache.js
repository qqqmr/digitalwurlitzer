app = angular.module('starter');
app.factory('SelectionCache', function(){

    // mock an "active" bar out of all available bars - this should be
    // automatically resolved when the backend is implemented
    var activeBar = {};
    var selectedBar = {};
    var activeUser = {};
    var lastVotedSongIndex = 0;
    var playlistNotDone = true;

    return {
        setActiveBar: function(bar){
            activeBar = bar;
        },
        getActiveBar: function(){
            return activeBar;
        },
        setSelectedBar: function (bar) {
            selectedBar = bar;
        },
        getSelectedBar: function () {
            return selectedBar;
        },
        setActiveUser: function(user){
            activeUser = user;
        },
        getActiveUser: function(){
            return activeUser;
        },
        setLastVotedSongIndex: function (index) {
            lastVotedSongIndex = index;
        },
        getLastVotedSongIndex: function () {
            return lastVotedSongIndex;
        },
        setplaylistNotDone: function(playlistNotDoneFlag) {
            playlistNotDone = playlistNotDoneFlag;
        },
        getplaylistDone: function() {
            return playlistNotDone;
        }
    }
    }
)