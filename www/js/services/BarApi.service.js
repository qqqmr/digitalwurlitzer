app = angular.module('starter');
app.factory('BarApi', function($http, $log, SelectionCache) {
    /**
     * The endpoint /bars (+ bar ID) is just a mock of a central API server
     * all other voting/playlist/etc. specific stuff targets the ROOT endpoint of the raspberry pi
     * @type {string}
     */
    var ENDPOINT = "/bars";

    /**
     * This gets set after a user logs into one bar
     * @type {null}
     */
    var bar = SelectionCache.getActiveBar();

    function _getBar(id){
        bar = SelectionCache.getActiveBar();
        return $http.get(ENDPOINT + "/" + bar.id)
    }

    /**
     * Log the user into the active Bar
     * @param username
     * @param password
     * @returns {HttpPromise} user
     * @private
     */
    function _login(username, password){
        bar = SelectionCache.getActiveBar();
        return $http.post(ENDPOINT + "/" + bar.id + "/login", {"username": username, "password": password})
    }

    /**
     * Gets the current and active playlist
     * @returns {HttpPromise}
     * @private
     */
    function _getActiveVotingList() {
        bar = SelectionCache.getActiveBar();
        return $http.get(ENDPOINT + "/" + bar.id + "/active")
    }

    /**
     * Increases the shuffle counter of the active playlist by 1
     * If the counter > maxShuffleVotes, it will switch to another playlist
     * Returns the current state of the counter (number)
     * @returns {HttpPromise}
     * @private
     */
    function _increaseVoteForShuffle() {
        bar = SelectionCache.getActiveBar();
        return $http.post(ENDPOINT + "/" + bar.id + "/active/inc")
    }
    /**
     * Make a vote for a song in the activeVote.future list
     * @param user the user who makes the vote
     * @param song the song to vote for
     * @param points the points, a user gives (+/- X)
     * @private
     */
    function _makeVoteFor(user, song, points) {
        bar = SelectionCache.getActiveBar();
        var data = {
            "user": user,
            "song": song,
            "points": points
        }
        return $http.post(ENDPOINT + "/" + bar.id + "/vote", data)
    }

    return {
        'getBar': _getBar,
        'getActiveVotingList': _getActiveVotingList,
        'makeVoteFor': _makeVoteFor,
        'increaseShuffleVote': _increaseVoteForShuffle,
        'login': _login
    }
})