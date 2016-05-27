angular.module('wurlitzer.controllers', [])

    .controller('MainMenuController', function($scope, $location, SelectionCache) {

        $scope.show_playlist = function ( path ) {
            $location.url( path );
        };
        $scope.vote_songs = function ( path ) {
            $location.url( path );
        };
        $scope.bar_info = function ( path ) {
            $location.url( path + SelectionCache.getActiveBar().id);
        };
        $scope.find_bars = function ( path ) {
            $location.url( path );
        };
    })

    .controller('VoteSongsController', function($scope, $ionicHistory, BarApi, SelectionCache) {

        var activePlaylist = null;
        var index = SelectionCache.getLastVotedSongIndex();
        var playlistLength = 0;
        var flag = true;
        $scope.flag = flag;
        
        BarApi.getActiveVotingList().then(function(res){
            activePlaylist = res.data.activeVoting;
            playlistLength = activePlaylist.future.length;
            $scope.title = activePlaylist.future[index].title;
            $scope.artist = activePlaylist.future[index].artist;
            $scope.cover = activePlaylist.future[index].img_url;
            $scope.playlistName = activePlaylist.name;

        });

        updateVotingSong = function () {
            index++;
            SelectionCache.setLastVotedSongIndex(index);
            if(index < playlistLength) {
                $scope.title = activePlaylist.future[index].title;
                $scope.artist = activePlaylist.future[index].artist;
                $scope.cover = activePlaylist.future[index].img_url;
            } else {
                flag = false;
                $scope.flag = flag;
                console.log("Playlist done")
            }
        };
        
        $scope.showActiveBar = function() {

        };

        $scope.voteUp = function(){
            if(flag) {
            // to vote for a song, do it this way:
                BarApi.makeVoteFor(SelectionCache.getActiveUser(), { id: activePlaylist.future[index].id, "someotherproperties": "xyz"} , 10)
                    .then(function success(res){
                        updateVotingSong();
                        console.log(res);
                    }, function err(res){
                        console.log(res);
                    })
            }
        };


        $scope.voteDown = function(){
            if(flag) {
                console.log("index: ", index);
                // to vote for a song, do it this way:
                BarApi.makeVoteFor(SelectionCache.getActiveUser(), { id: activePlaylist.future[index].id, "someotherproperties": "xyz"} , -10)
                    .then(function success(res){
                        updateVotingSong();
                        console.log(res);
                    }, function err(res){
                        console.log(res);
                    })
            }

        };
        
        $scope.increaseShuffle = function(){
            BarApi.increaseShuffleVote().then(function success(res){
                if(res.data === 0){
                    SelectionCache.setLastVotedSongIndex(0);
                    index = SelectionCache.getLastVotedSongIndex();
                    playlistLength = 0;
                    flag = true;

                    BarApi.getActiveVotingList().then(function(res){
                        activePlaylist = res.data.activeVoting;
                        playlistLength = activePlaylist.future.length;
                        $scope.title = activePlaylist.future[index].title;
                        $scope.artist = activePlaylist.future[index].artist;
                        $scope.cover = activePlaylist.future[index].img_url;
                        $scope.playlistName = activePlaylist.name;

                    });
                    
                    console.log("playlist changed");
                }
                console.log(res.data);
            })
        }
    })

    .controller('BarInfoController', function($scope, $stateParams, $ionicHistory, BarApi, GlobalBarsApi, $location, SelectionCache) {

        if(_.isEmpty(SelectionCache.getActiveBar())) {
            GlobalBarsApi.getAllBars().then(function(res){
                SelectionCache.setActiveBar(res.data[$stateParams.barId]);

                $scope.name = SelectionCache.getActiveBar().name;
                $scope.events = SelectionCache.getActiveBar().info.events;
                $scope.special_drinks = SelectionCache.getActiveBar().info.special_drinks;
                $scope.openHours = SelectionCache.getActiveBar().info.open;
            });

        } else {
            BarApi.getBar(SelectionCache.getActiveBar().id).then(function(res) {
                $scope.name = res.data.name;
                $scope.events = res.data.info.events;
                $scope.special_drinks = res.data.info.special_drinks;
                $scope.openHours = res.data.info.open;
            });
        }



        $scope.login = function() {
            console.log("try login");
            BarApi.login("test", "test").then(
                function succ(res) {
                    SelectionCache.setActiveUser(res.data)
                    $location.url("/main-menu")
                },
                function err(err) {
                    console.log("error login: ", err);
                }
            )
        };


    })

    .controller('FindBarsController', function($scope, $ionicHistory, GlobalBarsApi, SelectionCache, $ionicLoading, $compile, $http, $location) {

        //init map
        initialize();

        //Initializes Map
        function initialize()
        {
            //default center location = vienna
            var centerLatlng = new google.maps.LatLng(48.209206,16.372778); // default location = vienna

            //Todo delete, for testing purpose
            centerLatlng = new google.maps.LatLng(48.2364, 16.3914); //TODO delete

            //Set map center to device location
            navigator.geolocation.getCurrentPosition(function(pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $scope.map.setCenter(new google.maps.LatLng(48.2364, 16.3914)); //TODO delete
            }, function(error) {
                console.log('Unable to get location: ' + error.message);
            });

            //Construct google.map
            var mapOptions = {
                center: centerLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            //wait screen
            var infowindow = new google.maps.InfoWindow({
                content: "comming.."
            });

            // Set Marker on map for each bar
            GlobalBarsApi.getAllBars().then(function(res){
                for(var i in res.data)
                {
                    //new marker object
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(res.data[i].latidude, res.data[i].longitude),
                        map: map,
                        title: res.data[i].name
                    });
                    marker.id = res.data[i].id;

                    //content of popupwindow
                    var contentString = "<div><p>"+res.data[i].name+"</p><button class='button icon-right ion-chevron-right button-calm' ng-click='forward(&#39;/bar-info/"+res.data[i].id+"&#39;)'>View Bar Info</button> </div>";

                    //bind pop up window to marker
                    bindInfoWindow(marker, map, infowindow, contentString);
                }

                //Helper Fkt
                //Binds Info Pop Up Windows to Markers
                //Thanks to http://stackoverflow.com/a/16606414
                function bindInfoWindow(marker, map, infowindow, contentString) {
                    marker.addListener('click', function() {
                        var compiled = $compile(contentString)($scope);
                        infowindow.setContent(compiled[0]);
                        infowindow.open(map, this);
                    });
                }

            });

            //Bind map to view
            $scope.map = map;
        }


        //Function called from pop ups
        // url pattern /bar-info/id
        $scope.forward = function ( path ) {
            $location.url( path );
        };


        /*
        Deprecated, due to meeting on 2016-05-23
        Check in to bar is now handled in bar-info

        $scope.clickCheckIn = function(id) 
        {
            GlobalBarsApi.getAllBars().then(function (res) {
                function getBarById(id) {
                    return res.data.filter(
                        function(res) {
                            return res.id == id
                        }
                    );
                }

                SelectionCache.setActiveBar(getBarById(id)[0]);
                return;
            })

            //Fehlerbehandlung
            alert('Youre now checked in to'+id );
        };
        */



        //Function called on search field input
        // performs google api req
        // and centers map on found location
        $scope.searchCity = function() {
            //Function is called on searchfield dispatch
            // #1 send request to google's maps api to geolocate the given city
            // #2a  on error show message to usr
            // #2b  on success save data from json to map
            $http.get("http://maps.googleapis.com/maps/api/geocode/json", {   //#1
                params: {
                    address: this.searchInput
                }
            }).then(function(response) {
                if (response.data.status == "ZERO_RESULTS")       //#2a
                    alert("Unfortunately i could not find this Location (check your internetconnection or spelling)");
                else {                                            //#2b
                    var center = new google.maps.LatLng(    response.data.results[0].geometry.location.lat,
                                                            response.data.results[0].geometry.location.lng );
                    $scope.map.panTo(center);
                }
            }); //end of $http request
        } //end of searchCity function

    });




