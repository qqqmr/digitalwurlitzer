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

        var activePlaylist = null;
        var index = 0;
        var playlistLenght = 0;

        BarApi.getActiveVotingList().then(function(res){
            activePlaylist = res.data.activeVoting.future;
            console.log("activePlaylist: ",activePlaylist);
            playlistLenght = activePlaylist.length;
            $scope.title = activePlaylist[index].title;
            $scope.artist = activePlaylist[index].artist;
        });

        $scope.updateVotingSong = function () {
            index++;
            $scope.title = activePlaylist[index].title;
            $scope.artist = activePlaylist[index].artist;
        };
        
        $scope.showActiveBar = function() {

        };

        $scope.voteUp = function(){

            console.log("index: ", index);
            // to vote for a song, do it this way:
            // active Bar is set, so we can log in to that bar.
            BarApi.login("test", "test").then(
                function succ(res){
                    SelectionCache.setActiveUser(res.data)
                    BarApi.makeVoteFor(SelectionCache.getActiveUser(), { id: activePlaylist[index].id, "someotherproperties": "xyz"} , 10)
                        .then(function success(res){
                            $scope.updateVotingSong();
                            console.log(res);
                        }, function err(res){
                            console.log(res);
                        })
                },  function err(res){
                    console.log("Wrong Password or Username!");
                })
        }

        $scope.voteDown = function(){

            console.log("index: ", index);
            // to vote for a song, do it this way:
            // active Bar is set, so we can log in to that bar.
            BarApi.login("test", "test").then(
                function succ(res){
                    SelectionCache.setActiveUser(res.data)
                    BarApi.makeVoteFor(SelectionCache.getActiveUser(), { id: activePlaylist[index].id, "someotherproperties": "xyz"} , -10)
                        .then(function success(res){
                            $scope.updateVotingSong();
                            console.log(res);
                        }, function err(res){
                            console.log(res);
                        })
                },  function err(res){
                    console.log("Wrong Password or Username!");
                })
        }
    })

    .controller('BarInfoController', function($scope, $ionicHistory, BarApi) {
        
        //TODO: set selection cache instead of hard coded id
        BarApi.getBar(0).then(function(res){

            console.log("res: ", res);
            $scope.name = res.data.name;
            $scope.events = res.data.info.events;
            $scope.special_drinks = res.data.info.special_drinks;
            $scope.openHours = res.data.info.open;
        });

    })

    .controller('FindBarsController', function($scope, $ionicHistory, GlobalBarsApi, SelectionCache, $ionicLoading, $compile, $http) {

        //alert(SelectionCache.getActiveBar().name);

        function initialize()
        {
            var centerLatlng = new google.maps.LatLng(48.209206,16.372778); // default location = vienna
            centerLatlng = new google.maps.LatLng(48.2364, 16.3914); //TODO delete
            //TODO center map on current active Bar
            navigator.geolocation.getCurrentPosition(function(pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $scope.map.setCenter(new google.maps.LatLng(48.2364, 16.3914)); //TODO delete
            }, function(error) {
                console.log('Unable to get location: ' + error.message);
            });

            var mapOptions = {
                center: centerLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            var infowindow = new google.maps.InfoWindow({
                content: "comming.."
            });

            // Set Marker for each Bar
            GlobalBarsApi.getAllBars().then(function(res){
                for(var i in res.data)
                {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(res.data[i].latidude, res.data[i].longitude),
                        map: map,
                        title: res.data[i].name
                    });
                    marker.id = res.data[i].id;

                    var contentString = "<div>"+res.data[i].name+"<br/><a ng-click='clickCheckIn("+res.data[i].id+")'>View Bar Info</a> </div>";
                    bindInfoWindow(marker, map, infowindow, contentString);
                }


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

            //Bind Map
            $scope.map = map;
        }
        
        initialize();

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



        /* Handle Inputs from Search Field */
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




        // TODO::
        // !! when the user finally did choose a bar, or better: if he is finally logged into that bar
        // set SelectionCache.setActiveBar(bar) and SelectionCache.setActiveUser(user)
        // this happens already in the NavBarController. delete it there if this block here
        // is a valid selection of a bar (not a hardcoded data[0])
        /*GlobalBarsApi.getAllBars().then(function(res){
            SelectionCache.setActiveBar(res.data[0]);
        })*/
    });




