app = angular.module('starter');
app.run(function($httpBackend, BackendData, $log, $window) {

    // just a debug method, prints the current state of the backend
    $window.getBackendState = function(){
        console.log(BackendData.bars);
    }

    // returns a the list of metainformation of available bars
    $httpBackend.whenGET(/bars$/).respond(function (method, url, data) {
        return [200, _.map(BackendData.bars, function(b){
            return _.omit(b, ['playlists', 'activeVoting']);
        })]
    });

    $httpBackend.whenGET(/^\/templates\//).passThrough();
    $httpBackend.whenGET(/\.*(maps\.googleapis\.com).*/).passThrough(); //forward Google Api Requests

    // gets all contents of a bar object
    $httpBackend.whenGET(/bars\/\w+$/).respond(function (method, url) {
        var re = /.*\/bars\/(\w+)/;
        var id = parseInt(url.replace(re, '$1'), 10);
        var found = _.filter(BackendData.bars, function(o){ return o.id === id});
        if (!found[0]) return [404, null];
        return [200, found[0]];
    });

    $httpBackend.whenGET(/bars\/\w+\/active/).respond(function (method, url, data, headers, params) {
        var re = /.*\/bars\/(\w+)\/active/;
        var id = parseInt(url.replace(re, '$1'), 10);
        var found = _.filter(BackendData.bars, function(o){ return o.id === id});
        if (!found[0]) return [404, null];
        return [200, _.pick(found[0], ['id', 'activeVoting'])]
    });

    $httpBackend.whenPOST(/bars\/\w+\/login/).respond(function(method, url, data) {
        var re = /.*\/bars\/(\w+)\/login/;
        var id = parseInt(url.replace(re, '$1'), 10);
        var loginAttempt = angular.fromJson(data);
        var found = _.filter(BackendData.bars, function(o){ return o.id === id});
        if(!found[0]) return [404];
        var user = _.find(found[0].users, function(o){
            return (o.username === loginAttempt.username && o.password === loginAttempt.password)
        })
        if(!user) return [400];
        return [200, user]
    })

    // adds a new vote to the song in the bar.activeVote.future
    $httpBackend.whenPOST(/bars\/\w+\/vote/).respond(function(method, url, data) {
        var re = /.*\/bars\/(\w+)\/vote/;
        var id = parseInt(url.replace(re, '$1'), 10);
        //if(!id) return [404];
        var vote = angular.fromJson(data);
        if(!vote || !vote.song || !vote.user) return [400];
        var result = null;
        _.forEach(BackendData.bars, function(o){
            if(o.id !== id) return;
            _.forEach(o.activeVoting.future, function(song){
                if(song.id !== vote.song.id) return;
                song.votes.push(vote);
                result = song.votes;
            })
        });
        if(!result) return [404]
        return [200, result, {}];
    });

    $httpBackend.whenPOST(/bars\/\w+\/active\/inc/).respond(function(method, url, data) {
        var re = /.*\/bars\/(\w+)\/active\/inc/;
        var id = parseInt(url.replace(re, '$1'), 10);
        var Bar = _.find(BackendData.bars, function(o) { return o.id === id; });
        if(!Bar) return [404]
        Bar.shuffleCount++;
        if(Bar.shuffleCount < Bar.shuffleCountMax) return [200, Bar.shuffleCount];
        Bar.shuffleCount = 0;
        
        // now take the next playlist, join songs by id props and insert it to activeVoting
        // with the first song into activeVoting.history and [0].currentSong = true
        // and the rest into activeVoting.future

        var newPlaylist = _.cloneDeep(_.find(Bar.playlists, function(o){ return o.id !== Bar.activeVoting.playlist}))
        var newSongList = [];
        _.forEach(newPlaylist.songs, function (o) {
          var song = null;
          _.every(BackendData.songs, function(s){
              if(s.id === o) {
                  song = s;
                  return false;
              }
              return true;
          });
          song ? newSongList.push(song) : null;
        })

        if(newSongList.length === 0) return [500, "SERVER ERROR: Playlist got no songs!"]
        
        // prepare the new playlist object
        Bar.activeVoting = newPlaylist;
        Bar.activeVoting.playlist = Bar.activeVoting.id;
        Bar.activeVoting.history = [];
        Bar.activeVoting.future = [];
        delete Bar.activeVoting.id;
        delete Bar.activeVoting.songs;

        Bar.activeVoting.history = _.take(newSongList);
        Bar.activeVoting.history[0].currentSong = true;

        Bar.activeVoting.future = _.tail(newSongList);
        //delete old votes!
        _.forEach(Bar.activeVoting.future, function(song){
           song.votes = [];
        })

        return [200, 0]; // return 0 means: PLAYLIST GOT SHUFFLED!
    });

    $httpBackend.whenGET(/song\/\w+$/).respond(function (method, url, data, headers, params) {
        var re = /.*\/song\/(\w+)/;
        var id = parseInt(url.replace(re, '$1'), 10);
        var found = _.filter(BackendData.songs, function(o){ return o.id === id});
        if (!found[0]) return [404, null];
        return [200, found[0]];
    });


})