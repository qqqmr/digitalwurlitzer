app = angular.module('starter');
app.factory('BackendMocks', function(){ return {
    "bars": [{
        "name": "Irish Pub #1",
        "open": {
            "monday": {
                "from": "17:00",
                "to": "24:00" },
            "tuesday": {
                "from": "20:00",
                "to": "03:00" },
            "wednesday": {
                "from": "20:00",
                "to": "04:00"
            }
        },
        "id": 0,
        "playlists": [
            {
                "name": "RockMetalMix",
                "id": 0,
                "songs": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
            },
            {
                "name": "GoaPsyTrance",
                "id": 1,
                "songs": [21,22,23,24,25,26,27,28,29,30,31]
            }
         ],
        "activeVoting": {
            "playlist": 0,
            "history":{"playedAt": "5.2.2014/14:40", title:"1904","artist":"The Tallest Man on Earth","year":"2012","web_url":"http://www.songnotes.cc/songs/78-the-tallest-man-on-earth-1904","img_url":"http://fireflygrove.com/songnotes/images/artists/TheTallestManOnEarth.jpg","id":0,"votes":[]},
            "future": [{"title":"#40","artist":"Dave Matthews","year":"1999","web_url":"http://www.songnotes.cc/songs/119-dave-matthews-40","img_url":"http://fireflygrove.com/songnotes/images/artists/DaveMatthews.jpg"},{"title":"40oz to Freedom","artist":"Sublime","year":"1996","web_url":"http://www.songnotes.cc/songs/45-sublime-40oz-to-freedom","img_url":"http://fireflygrove.com/songnotes/images/artists/Sublime.png"},{"title":"#41","artist":"Dave Matthews","year":"1996","web_url":"http://www.songnotes.cc/songs/46-dave-matthews-band-41","img_url":"http://fireflygrove.com/songnotes/images/artists/DaveMatthews.jpg"},{"title":"American Girl","artist":"Tom Petty","year":"1977","web_url":"http://www.songnotes.cc/songs/86-tom-petty-american-girl","img_url":"http://fireflygrove.com/songnotes/images/artists/TomPetty.png"},{"title":"American Music","artist":"Violent Femmes","year":"1991","web_url":"http://www.songnotes.cc/songs/123-violent-femmes-american-music","img_url":"http://fireflygrove.com/songnotes/images/artists/ViolentFemmes.jpg"}]
        }
    }, {
        "name": "Irish Pub #2",
        "open": {
            "monday": {
                "from": "17:00",
                "to": "24:00" },
            "tuesday": {
                "from": "20:00",
                "to": "03:00" },
            "wednesday": {
                "from": "20:00",
                "to": "04:00"
            }
        },
        "id": 1
    }, {
        "name": "Irish Pub #3",
        "open": {
            "monday": {
                "from": "17:00",
                "to": "24:00" },
            "tuesday": {
                "from": "20:00",
                "to": "03:00" },
            "wednesday": {
                "from": "20:00",
                "to": "04:00"
            }
        },
        "id": 2
    }]
  }
})