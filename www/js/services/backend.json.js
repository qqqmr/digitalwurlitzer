app = angular.module('starter');
app.factory('BackendData', function(){ return {
    "bars": [{
        "name": "Irish Pub #1",
        /* additional bar props come here. specials, etc. */
        "users": [ // mock "facebook"/"twitter", OAUTH users...
            {
                "id": 0,
                "username": "test",
                "password": "test",
                "lastShuffleVote": new Date(), // just a proposal: capture the last shuffle vote 
                                                // and allow a new vote just every 10 minutes or whatever
                
                
                "power": 1.1    // just a proposal: the actual points for the vote could be power*(+/-1000)
                                // depending on how many likes/dislikes this user collected.
            },
            {
                "id": 1,
                "username": "test1",
                "password": "test1",
                "power": 0.5
            },
            {
                "id": 2,
                "username": "test2",
                "password": "test2"
            }],
        "info": {
            "open": [
                {
                    "day": "Montag",
                    "from": "geschlossen",
                    "to": "geschlossen"
                },
                {
                    "day": "Dienstag-Freitag",
                    "from": "16:00",
                    "to": "00:00"
                },
                {
                    "day": "Samstag-Sonntag",
                    "from": "18:00",
                    "to": "04:00"
                }
            ],
            "special_drinks": [
                {
                    "name": "Gin Tonic",
                    "price": 3.90
                },
                {
                    "name": "Ottakringer Zwickl 0.5",
                    "price": 2.60
                },
                {
                    "name": "Tequilla Shot",
                    "price": 1.50
                }
            ],
            "events": [
                {
                    "name": "Summer Opening",
                    "band": "Orishas",
                    "date": "15.05.2016",
                    "from": "16:00",
                    "to"  : "04:00"
                },
                {
                    "name": "Goa Party",
                    "band": "Infected Mushroom",
                    "date": "20.07.2016",
                    "from": "12:00",
                    "to"  : "06:00"
                }
            ]
        },
        "latidude": "48.2364",
        "longitude": "16.3914",
        "shuffleCount": 0,
        "shuffleCountMax": 1,
        "id": 0,
        "playlists": [
            {
                "name": "GoaPsyTrance",
                "id": 0,
                "songs": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
            },
            {
                "name": "Country",
                "id": 1,
                "songs": [21,22,23,24,25,26,27,28,29,30,31]
            }
         ],
        "activeVoting": {
            "playlist": 0,
            "name": "GoaPsyTrance",
            "history":[{"title":"Creep","artist":"Radiohead","year":"1993", "currentSong": true, "web_url":"http://www.songnotes.cc/songs/36-radiohead-creep","img_url":"http://fireflygrove.com/songnotes/images/artists/Radiohead.jpg","id":20,"votes":[]}],
            "future": [{"title":"1904","artist":"The Tallest Man on Earth","year":"2012","web_url":"http://www.songnotes.cc/songs/78-the-tallest-man-on-earth-1904","img_url":"img/img01.jpg","id":1,"votes":[]},{"title":"40oz to Freedom","artist":"Sublime","year":"1996","web_url":"http://www.songnotes.cc/songs/45-sublime-40oz-to-freedom","img_url":"img/img02.jpg","id":2,"votes":[]},{"title":"#41","artist":"Dave Matthews","year":"1996","web_url":"http://www.songnotes.cc/songs/46-dave-matthews-band-41","img_url":"img/img03.jpg","id":3,"votes":[]},{"title":"American Girl","artist":"Tom Petty","year":"1977","web_url":"http://www.songnotes.cc/songs/86-tom-petty-american-girl","img_url":"img/img04.jpg","id":4,"votes":[]},{"title":"American Music","artist":"Violent Femmes","year":"1991","web_url":"http://www.songnotes.cc/songs/123-violent-femmes-american-music","img_url":"img/img05.jpg","id":5,"votes":[]}]
            // if you vote, push an object to the vote array. { user: the user who voted, the points he invested + or -}
        }
    }, {
        "name": "Irish Pub #2",
        /* additional bar props come here. specials, etc. */
        "users": [
            {
                "id": 0,
                "username": "irishpub2user1",
                "password": "test"
            },
            {
                "id": 1,
                "username": "irishbub2user2",
                "password": "test1"
            }],
        "latidude": "48.2380",
        "longitude": "16.3499",
        "info": {
            "open": [
                {
                    "day": "Montag-Donnerstag",
                    "from": "12:00",
                    "to": "10:00"
                },
                {
                    "day": "Freitag-Samstag",
                    "from": "16:00",
                    "to": "03:00"
                },
                {
                    "day": "Sonntag",
                    "from": "geschlossen",
                    "to": "geschlossen"
                }
            ],
            "special_drinks": [
                {
                    "name": "Bacardi Cola",
                    "price": 4.00
                },
                {
                    "name": "Jägermeister",
                    "price": 1.80
                },
                {
                    "name": "Averna Sauer",
                    "price": 1.80
                }
            ],
            "events": [
                {
                    "name": "Musikfestival",
                    "band": "Blasmusik Nikolsdorf",
                    "date": "04.09.2016",
                    "from": "12:00",
                    "to"  : "23:00"
                },
                {
                    "name": "Feuerwehrfeier",
                    "band": "Seiler & Speer",
                    "date": "11.11.2016",
                    "from": "14:00",
                    "to"  : "02:00"
                }
            ]
        },
        "id": 1
    }, {
        "name": "Irish Pub #3",
        /* additional bar props come here. specials, etc. */
        "latidude": "48.2410",
        "longitude": "16.3668",
        "shuffleCount": 0,
        "shuffleCountMax": 1,
        "info": {
            "open": [
                {
                    "day": "Montag",
                    "from": "15:00",
                    "to": "23:00"
                },
                {
                    "day": "Dienstag-Freitag",
                    "from": "17:00",
                    "to": "01:00"
                },
                {
                    "day": "Samstag-Sonntag",
                    "from": "18:00",
                    "to": "05:00"
                }
            ],
            "special_drinks": [
                {
                    "name": "Long Island Ice Tea",
                    "price": 5.50
                },
                {
                    "name": "Captain Cola",
                    "price": 4.60
                },
                {
                    "name": "Tequilla Shot",
                    "price": 1.50
                }
            ],
            "events": [
                {
                    "name": "Krampusfest",
                    "band": "Manowar",
                    "date": "04.12.2016",
                    "from": "17:00",
                    "to"  : "03:00"
                },
                {
                    "name": "Neujahrsfest",
                    "band": "Die Toten Hosen",
                    "date": "01.01.2017",
                    "from": "13:00",
                    "to"  : "20:00"
                }
            ]
        },
        "id": 2
    }],
    "songs": [{"title":"1904","artist":"The Tallest Man on Earth","year":"2012","web_url":"http://www.songnotes.cc/songs/78-the-tallest-man-on-earth-1904","img_url":"http://fireflygrove.com/songnotes/images/artists/TheTallestManOnEarth.jpg","id":1,"votes":[]},{"title":"40oz to Freedom","artist":"Sublime","year":"1996","web_url":"http://www.songnotes.cc/songs/45-sublime-40oz-to-freedom","img_url":"http://fireflygrove.com/songnotes/images/artists/Sublime.png","id":2,"votes":[]},{"title":"#41","artist":"Dave Matthews","year":"1996","web_url":"http://www.songnotes.cc/songs/46-dave-matthews-band-41","img_url":"http://fireflygrove.com/songnotes/images/artists/DaveMatthews.jpg","id":3,"votes":[]},{"title":"American Girl","artist":"Tom Petty","year":"1977","web_url":"http://www.songnotes.cc/songs/86-tom-petty-american-girl","img_url":"http://fireflygrove.com/songnotes/images/artists/TomPetty.png","id":4,"votes":[]},{"title":"American Music","artist":"Violent Femmes","year":"1991","web_url":"http://www.songnotes.cc/songs/123-violent-femmes-american-music","img_url":"http://fireflygrove.com/songnotes/images/artists/ViolentFemmes.jpg","id":5,"votes":[]},{"title":"American Pie","artist":"Don McLean","year":"1972","web_url":"http://www.songnotes.cc/songs/132-don-mclean-american-pie","img_url":"http://fireflygrove.com/songnotes/images/artists/DonMcLean.jpg","id":6,"votes":[]},{"title":"And it Stoned Me","artist":"Van Morrison","year":"1970","web_url":"http://www.songnotes.cc/songs/27-van-morrison-and-it-stoned-me","img_url":"http://fireflygrove.com/songnotes/images/artists/VanMorrison.jpg","id":7,"votes":[]},{"title":"A Sailor's Christmas","artist":"Jimmy Buffett","year":"1996","web_url":"http://www.songnotes.cc/songs/11-jimmy-buffett-a-sailors-christmas","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":8,"votes":[]},{"title":"Badfish","artist":"Sublime","year":"1996","web_url":"http://www.songnotes.cc/songs/21-sublime-badfish","img_url":"http://fireflygrove.com/songnotes/images/artists/Sublime.png","id":9,"votes":[]},{"title":"Banana Pancakes","artist":"Jack Johnson","year":"2005","web_url":"http://www.songnotes.cc/songs/102-jack-johnson-banana-pancakes","img_url":"http://fireflygrove.com/songnotes/images/artists/JackJohnson.png","id":10,"votes":[]},{"title":"Barefoot Children","artist":"Jimmy Buffett","year":"1995","web_url":"http://www.songnotes.cc/songs/9-jimmy-buffett-barefoot-children","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":11,"votes":[]},{"title":"Big Parade","artist":"The Lumineers","year":"2012","web_url":"http://www.songnotes.cc/songs/63-the-lumineers-big-parade","img_url":"http://fireflygrove.com/songnotes/images/artists/TheLumineers.png","id":12,"votes":[]},{"title":"Brown Eyed Girl","artist":"Van Morrison","year":"1967","web_url":"http://www.songnotes.cc/songs/69-van-morrison-brown-eyed-girl","img_url":"http://fireflygrove.com/songnotes/images/artists/VanMorrison.jpg","id":13,"votes":[]},{"title":"Cape Canaveral","artist":"Conor Oberst","year":"2008","web_url":"http://www.songnotes.cc/songs/75-conor-oberst-cape-canaveral","img_url":"http://fireflygrove.com/songnotes/images/artists/ConorOberst.jpg","id":14,"votes":[]},{"title":"Carry On","artist":"fun.","year":"2012","web_url":"http://www.songnotes.cc/songs/122-fun-carry-on","img_url":"http://fireflygrove.com/songnotes/images/artists/Fun.png","id":15,"votes":[]},{"title":"Catch the Wind","artist":"Donovan","year":"1965","web_url":"http://www.songnotes.cc/songs/131-donovan-catch-the-wind","img_url":"http://fireflygrove.com/songnotes/images/artists/Donovan.jpg","id":16,"votes":[]},{"title":"Cat's in the Cradle","artist":"Harry Chapin","year":"1974","web_url":"http://www.songnotes.cc/songs/47-harry-chapin-cats-in-the-cradle","img_url":"http://fireflygrove.com/songnotes/images/artists/HarryChapin.jpg","id":17,"votes":[]},{"title":"Changes in Latitudes, Changes in Attitudes","artist":"Jimmy Buffett","year":"1977","web_url":"http://www.songnotes.cc/songs/38-jimmy-buffett-changes-in-latitudes-changes-in-attitudes","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":18,"votes":[]},{"title":"Classy Girls","artist":"The Lumineers","year":"2012","web_url":"http://www.songnotes.cc/songs/55-the-lumineers-classy-girls","img_url":"http://fireflygrove.com/songnotes/images/artists/TheLumineers.png","id":19,"votes":[]},{"title":"Creep","artist":"Radiohead","year":"1993","web_url":"http://www.songnotes.cc/songs/36-radiohead-creep","img_url":"http://fireflygrove.com/songnotes/images/artists/Radiohead.jpg","id":20,"votes":[]},{"title":"Danny Boy","artist":"Johnny Cash","year":"2002","web_url":"http://www.songnotes.cc/songs/92-johnny-cash-danny-boy","img_url":"http://fireflygrove.com/songnotes/images/artists/JohnnyCash.png","id":21,"votes":[]},{"title":"Darkness Between the Fireflies","artist":"Mason Jennings","year":"1997","web_url":"http://www.songnotes.cc/songs/16-mason-jennings-darkness-between-the-fireflies","img_url":"http://fireflygrove.com/songnotes/images/artists/MasonJennings.jpg","id":22,"votes":[]},{"title":"Dead Sea","artist":"The Lumineers","year":"2012","web_url":"http://www.songnotes.cc/songs/98-the-lumineers-dead-sea","img_url":"http://fireflygrove.com/songnotes/images/artists/TheLumineers.png","id":23,"votes":[]},{"title":"Distantly in Love","artist":"Jimmy Buffett","year":"1983","web_url":"http://www.songnotes.cc/songs/35-jimmy-buffett-distantly-in-love","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":24,"votes":[]},{"title":"Don't Leave Me (Ne Me Quitte Pas)","artist":"Regina Spektor","year":"2012","web_url":"http://www.songnotes.cc/songs/77-regina-spektor-dont-leave-me-no-me-quitte-pas","img_url":"http://fireflygrove.com/songnotes/images/artists/ReginaSpektor.jpg","id":25,"votes":[]},{"title":"Don't Look Back in Anger","artist":"Oasis","year":"1996","web_url":"http://www.songnotes.cc/songs/100-oasis-dont-look-back-in-anger","img_url":"http://fireflygrove.com/songnotes/images/artists/Oasis.png","id":26,"votes":[]},{"title":"Don't Stop Believin'","artist":"Journey","year":"1981","web_url":"http://www.songnotes.cc/songs/60-journey-dont-stop-believing","img_url":"http://fireflygrove.com/songnotes/images/artists/Journey.jpg","id":27,"votes":[]},{"title":"Doomsday","artist":"Elvis Perkins","year":"2009","web_url":"http://www.songnotes.cc/songs/120-elvis-perkins-doomsday","img_url":"http://fireflygrove.com/songnotes/images/artists/ElvisPerkins.jpg","id":28,"votes":[]},{"title":"Do You Remember","artist":"Jack Johnson","year":"2005","web_url":"http://www.songnotes.cc/songs/3-jack-johnson-do-you-remember","img_url":"http://fireflygrove.com/songnotes/images/artists/JackJohnson.png","id":29,"votes":[]},{"title":"Drink the Water","artist":"Jack Johnson","year":"2001","web_url":"http://www.songnotes.cc/songs/32-jack-johnson-drink-the-water","img_url":"http://fireflygrove.com/songnotes/images/artists/JackJohnson.png","id":30,"votes":[]},{"title":"Emmylou","artist":"First Aid Kit","year":"2012","web_url":"http://www.songnotes.cc/songs/74-first-aid-kit-emmylou","img_url":"http://fireflygrove.com/songnotes/images/artists/FirstAidKit.png","id":31,"votes":[]},{"title":"Fall Line","artist":"Jack Johnson","year":"2003","web_url":"http://www.songnotes.cc/songs/30-jack-johnson-fall-line","img_url":"http://fireflygrove.com/songnotes/images/artists/JackJohnson.png","id":32,"votes":[]},{"title":"Father and Son","artist":"Cat Stevens","year":"1970","web_url":"http://www.songnotes.cc/songs/28-cat-stevens-father-and-son","img_url":"http://fireflygrove.com/songnotes/images/artists/CatStevens.jpg","id":33,"votes":[]},{"title":"Flake","artist":"Jack Johnson","year":"2001","web_url":"http://www.songnotes.cc/songs/104-jack-johnson-flake","img_url":"http://fireflygrove.com/songnotes/images/artists/JackJohnson.png","id":34,"votes":[]},{"title":"Flapper Girl","artist":"The Lumineers","year":"2012","web_url":"http://www.songnotes.cc/songs/101-the-lumineers-flapper-girl","img_url":"http://fireflygrove.com/songnotes/images/artists/TheLumineers.png","id":35,"votes":[]},{"title":"Flowers in Your Hair","artist":"The Lumineers","year":"2012","web_url":"http://www.songnotes.cc/songs/96-the-lumineers-flowers-in-your-hair","img_url":"http://fireflygrove.com/songnotes/images/artists/TheLumineers.png","id":36,"votes":[]},{"title":"Folsom Prison Blues","artist":"Johnny Cash","year":"1957","web_url":"http://www.songnotes.cc/songs/108-johnny-cash-folsom-prison-blues","img_url":"http://fireflygrove.com/songnotes/images/artists/JohnnyCash.png","id":37,"votes":[]},{"title":"Free Fallin'","artist":"Tom Petty","year":"1989","web_url":"http://www.songnotes.cc/songs/84-tom-petty-free-fallin","img_url":"http://fireflygrove.com/songnotes/images/artists/TomPetty.png","id":38,"votes":[]},{"title":"Furr","artist":"Blitzen Trapper","year":"2008","web_url":"http://www.songnotes.cc/songs/10-blitzen-trapper-furr","img_url":"http://fireflygrove.com/songnotes/images/artists/BlitzenTrapper.jpg","id":39,"votes":[]},{"title":"Get Well Cards","artist":"Conor Oberst","year":"2008","web_url":"http://www.songnotes.cc/songs/54-conor-oberst-get-well-cards","img_url":"http://fireflygrove.com/songnotes/images/artists/ConorOberst.jpg","id":40,"votes":[]},{"title":"Gulf Coast Highway","artist":"Emmylou Harris","year":"2000","web_url":"http://www.songnotes.cc/songs/50-emmylou-harris-gulf-coast-highway","img_url":"http://fireflygrove.com/songnotes/images/artists/EmmylouHarris.jpg","id":41,"votes":[]},{"title":"Half Light I","artist":"Arcade Fire","year":"2010","web_url":"http://www.songnotes.cc/songs/29-arcade-fire-half-light-i","img_url":"http://fireflygrove.com/songnotes/images/artists/ArcadeFire.jpg","id":42,"votes":[]},{"title":"Half Light II (No Celebration)","artist":"Arcade Fire","year":"2010","web_url":"http://www.songnotes.cc/songs/12-arcade-fire-half-light-ii-no-celebration","img_url":"http://fireflygrove.com/songnotes/images/artists/ArcadeFire.jpg","id":43,"votes":[]},{"title":"Harvest","artist":"Neil Young","year":"1972","web_url":"http://www.songnotes.cc/songs/71-neil-young-harvest","img_url":"http://fireflygrove.com/songnotes/images/artists/NeilYoung.png","id":44,"votes":[]},{"title":"Heart of Gold","artist":"Neil Young","year":"1972","web_url":"http://www.songnotes.cc/songs/72-neil-young-heart-of-gold","img_url":"http://fireflygrove.com/songnotes/images/artists/NeilYoung.png","id":45,"votes":[]},{"title":"Here I Go Again","artist":"Whitesnake","year":"1982","web_url":"http://www.songnotes.cc/songs/130-whitesnake-here-i-go-again","img_url":"http://fireflygrove.com/songnotes/images/artists/Whitesnake.jpg","id":46,"votes":[]},{"title":"Hey Jealousy","artist":"Gin Blossoms","year":"1992","web_url":"http://www.songnotes.cc/songs/41-gin-blossoms-hey-jealousy","img_url":"http://fireflygrove.com/songnotes/images/artists/GinBlossoms.jpg","id":47,"votes":[]},{"title":"Hey Soul Sister","artist":"Train","year":"2009","web_url":"http://www.songnotes.cc/songs/129-train-hey-soul-sister","img_url":"http://fireflygrove.com/songnotes/images/artists/Train.jpg","id":48,"votes":[]},{"title":"High and Dry","artist":"Radiohead","year":"1995","web_url":"http://www.songnotes.cc/songs/37-radiohead-high-and-dry","img_url":"http://fireflygrove.com/songnotes/images/artists/Radiohead.jpg","id":49,"votes":[]},{"title":"Ho Hey","artist":"The Lumineers","year":"2012","web_url":"http://www.songnotes.cc/songs/34-the-lumineers-ho-hey","img_url":"http://fireflygrove.com/songnotes/images/artists/TheLumineers.png","id":50,"votes":[]},{"title":"Hollywood Forever Cemetery Sings","artist":"Father John Misty","year":"2012","web_url":"http://www.songnotes.cc/songs/114-father-john-misty-hollywood-forever-cemetery-sings","img_url":"http://fireflygrove.com/songnotes/images/artists/FatherJohnMisty.jpg","id":51,"votes":[]},{"title":"Home","artist":"Edward Sharpe & The Magnetic Zeros","year":"2009","web_url":"http://www.songnotes.cc/songs/93-edward-sharpe-magnetic-zeros-home","img_url":"http://fireflygrove.com/songnotes/images/artists/EdwardSharpeAndTheMagneticZeroes.png","id":52,"votes":[]},{"title":"Honey Do","artist":"Jimmy Buffett","year":"1983","web_url":"http://www.songnotes.cc/songs/97-jimmy-buffett-honey-do","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":53,"votes":[]},{"title":"Hospitals and Jails","artist":"Mason Jennings","year":"2002","web_url":"http://www.songnotes.cc/songs/113-mason-jennings-hospitals-and-jails","img_url":"http://fireflygrove.com/songnotes/images/artists/MasonJennings.jpg","id":54,"votes":[]},{"title":"Hotel California","artist":"The Eagles","year":"1977","web_url":"http://www.songnotes.cc/songs/56-the-eagles-hotel-california","img_url":"http://fireflygrove.com/songnotes/images/artists/TheEagles.jpg","id":55,"votes":[]},{"title":"Hotel Yorba","artist":"The White Stripes","year":"2001","web_url":"http://www.songnotes.cc/songs/57-the-white-stripes-hotel-yorba","img_url":"http://fireflygrove.com/songnotes/images/artists/TheWhiteStripes.jpg","id":56,"votes":[]},{"title":"I Feel Home","artist":"OAR","year":"1999","web_url":"http://www.songnotes.cc/songs/42-oar-i-feel-home","img_url":"http://fireflygrove.com/songnotes/images/artists/OAR.jpg","id":57,"votes":[]},{"title":"I Knew You Were Trouble","artist":"Taylor Swift","year":"2012","web_url":"http://www.songnotes.cc/songs/85-taylor-swift-i-knew-you-were-trouble","img_url":"http://fireflygrove.com/songnotes/images/artists/TaylorSwift.png","id":58,"votes":[]},{"title":"I'm Writing a Novel","artist":"Father John Misty","year":"2012","web_url":"http://www.songnotes.cc/songs/111-father-john-misty-im-writing-a-novel","img_url":"http://fireflygrove.com/songnotes/images/artists/FatherJohnMisty.jpg","id":59,"votes":[]},{"title":"Island in the Sun","artist":"Weezer","year":"2001","web_url":"http://www.songnotes.cc/songs/43-weezer-island-in-the-sun","img_url":"http://fireflygrove.com/songnotes/images/artists/Weezer.jpg","id":60,"votes":[]},{"title":"I Won't Give Up","artist":"Jason Mraz","year":"2012","web_url":"http://www.songnotes.cc/songs/107-jason-mraz-i-wont-give-up","img_url":"http://fireflygrove.com/songnotes/images/artists/JasonMraz.png","id":61,"votes":[]},{"title":"Jack & Diane","artist":"John Mellencamp","year":"1982","web_url":"http://www.songnotes.cc/songs/99-john-mellencamp-jack-and-diane","img_url":"http://fireflygrove.com/songnotes/images/artists/JohnMellencamp.png","id":62,"votes":[]},{"title":"Karma Police","artist":"Radiohead","year":"1997","web_url":"http://www.songnotes.cc/songs/14-radiohead-karma-police","img_url":"http://fireflygrove.com/songnotes/images/artists/Radiohead.jpg","id":63,"votes":[]},{"title":"King of Spain","artist":"The Tallest Man on Earth","year":"2010","web_url":"http://www.songnotes.cc/songs/80-the-tallest-man-on-earth-king-of-spain","img_url":"http://fireflygrove.com/songnotes/images/artists/TheTallestManOnEarth.jpg","id":64,"votes":[]},{"title":"King of the World","artist":"First Aid Kit","year":"2012","web_url":"http://www.songnotes.cc/songs/76-first-aid-kit-king-of-the-world","img_url":"http://fireflygrove.com/songnotes/images/artists/FirstAidKit.png","id":65,"votes":[]},{"title":"Lean On Me","artist":"Bill Withers","year":"1972","web_url":"http://www.songnotes.cc/songs/83-bill-withers-lean-on-me","img_url":"http://fireflygrove.com/songnotes/images/artists/BillWithers.png","id":66,"votes":[]},{"title":"Little Talks","artist":"Of Monsters and Men","year":"2012","web_url":"http://www.songnotes.cc/songs/105-of-monsters-and-men-little-talks","img_url":"http://fireflygrove.com/songnotes/images/artists/OfMonstersAndMen.png","id":67,"votes":[]},{"title":"Live and Die","artist":"The Avett Brothers","year":"2012","web_url":"http://www.songnotes.cc/songs/115-the-avett-brothers-live-and-die","img_url":"http://fireflygrove.com/songnotes/images/artists/AvettBrothers.jpg","id":68,"votes":[]},{"title":"Lola","artist":"The Kinks","year":"1970","web_url":"http://www.songnotes.cc/songs/128-the-kinks-lola","img_url":"http://fireflygrove.com/songnotes/images/artists/Kinks.jpg","id":69,"votes":[]},{"title":"Lonesome Town","artist":"Ricky Nelson","year":"1958","web_url":"http://www.songnotes.cc/songs/126-ricky-nelson-lonesome-town","img_url":"http://fireflygrove.com/songnotes/images/artists/RickyNelson.jpg","id":70,"votes":[]},{"title":"Love in the Library","artist":"Jimmy Buffett","year":"1994","web_url":"http://www.songnotes.cc/songs/23-jimmy-buffett-love-in-the-library","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":71,"votes":[]},{"title":"Love Story","artist":"Taylor Swift","year":"2008","web_url":"http://www.songnotes.cc/songs/61-taylor-swift-love-story","img_url":"http://fireflygrove.com/songnotes/images/artists/TaylorSwift.png","id":72,"votes":[]},{"title":"Margaritaville","artist":"Jimmy Buffett","year":"1977","web_url":"http://www.songnotes.cc/songs/62-jimmy-buffett-margaritaville","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":73,"votes":[]},{"title":"Me and Julio Down by the Schoolyard","artist":"Paul Simon","year":"1972","web_url":"http://www.songnotes.cc/songs/31-paul-simon-me-and-julio-down-by-the-schoolyard","img_url":"http://fireflygrove.com/songnotes/images/artists/PaulSimon.jpg","id":74,"votes":[]},{"title":"Migration","artist":"Jimmy Buffett","year":"1974","web_url":"http://www.songnotes.cc/songs/66-jimmy-buffett-migration","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":75,"votes":[]},{"title":"Moonshadow","artist":"Cat Stevens","year":"1971","web_url":"http://www.songnotes.cc/songs/73-cat-stevens-moonshadow","img_url":"http://fireflygrove.com/songnotes/images/artists/CatStevens.jpg","id":76,"votes":[]},{"title":"Mudfootball","artist":"Jack Johnson","year":"2001","web_url":"http://www.songnotes.cc/songs/59-jack-johnson-mudfootball","img_url":"http://fireflygrove.com/songnotes/images/artists/JackJohnson.png","id":77,"votes":[]},{"title":"My Antonia","artist":"Emmylou Harris","year":"2000","web_url":"http://www.songnotes.cc/songs/51-emmylou-harris-my-antonia","img_url":"http://fireflygrove.com/songnotes/images/artists/EmmylouHarris.jpg","id":78,"votes":[]},{"title":"New Realization","artist":"Sublime","year":"1996","web_url":"http://www.songnotes.cc/songs/39-sublime-new-realization","img_url":"http://fireflygrove.com/songnotes/images/artists/Sublime.png","id":79,"votes":[]},{"title":"No Surprises","artist":"Radiohead","year":"1997","web_url":"http://www.songnotes.cc/songs/52-radiohead-no-surprises","img_url":"http://fireflygrove.com/songnotes/images/artists/Radiohead.jpg","id":80,"votes":[]},{"title":"Nothing","artist":"Mason Jennings","year":"1997","web_url":"http://www.songnotes.cc/songs/15-mason-jennings-nothing","img_url":"http://fireflygrove.com/songnotes/images/artists/MasonJennings.jpg","id":81,"votes":[]},{"title":"Nothing Else Matters","artist":"Metallica","year":"1992","web_url":"http://www.songnotes.cc/songs/58-metallica-nothing-else-matters","img_url":"http://fireflygrove.com/songnotes/images/artists/Metallica.jpg","id":82,"votes":[]},{"title":"Only Son of the Ladiesman","artist":"Father John Misty","year":"2012","web_url":"http://www.songnotes.cc/songs/124-father-john-misty-only-son-of-the-ladiesman","img_url":"http://fireflygrove.com/songnotes/images/artists/FatherJohnMisty.jpg","id":83,"votes":[]},{"title":"Out on the Weekend","artist":"Neil Young","year":"1972","web_url":"http://www.songnotes.cc/songs/70-neil-young-out-on-the-weekend","img_url":"http://fireflygrove.com/songnotes/images/artists/NeilYoung.png","id":84,"votes":[]},{"title":"Party in the USA","artist":"Miley Cyrus","year":"2009","web_url":"http://www.songnotes.cc/songs/8-miley-cyrus-party-in-the-usa","img_url":"http://fireflygrove.com/songnotes/images/artists/MileyCyrus.jpg","id":85,"votes":[]},{"title":"Patience","artist":"Guns N' Roses","year":"1989","web_url":"http://www.songnotes.cc/songs/95-guns-n-roses-patience","img_url":"http://fireflygrove.com/songnotes/images/artists/GunsNRoses.png","id":86,"votes":[]},{"title":"Redemption Song","artist":"Bob Marley","year":"1980","web_url":"http://www.songnotes.cc/songs/67-bob-marley-redemption-song","img_url":"http://fireflygrove.com/songnotes/images/artists/BobMarley.jpg","id":87,"votes":[]},{"title":"Rivers of Babylon","artist":"Sublime","year":"1998","web_url":"http://www.songnotes.cc/songs/90-sublime-rivers-of-babylon","img_url":"http://fireflygrove.com/songnotes/images/artists/Sublime.png","id":88,"votes":[]},{"title":"Rocket Man","artist":"Elton John","year":"1972","web_url":"http://www.songnotes.cc/songs/135-elton-john-rocket-man","img_url":"http://fireflygrove.com/songnotes/images/artists/EltonJohn.jpg","id":89,"votes":[]},{"title":"Rodeo Clowns","artist":"Jack Johnson","year":"2003","web_url":"http://www.songnotes.cc/songs/68-jack-johnson-rodeo-clowns","img_url":"http://fireflygrove.com/songnotes/images/artists/JackJohnson.png","id":90,"votes":[]},{"title":"Send My Fond Regards to Lonelyville","artist":"Elvis Perkins","year":"2009","web_url":"http://www.songnotes.cc/songs/121-elvis-perkins-send-my-fond-regards-to-lonelyville","img_url":"http://fireflygrove.com/songnotes/images/artists/ElvisPerkins.jpg","id":91,"votes":[]},{"title":"Sentimental Heart","artist":"She & Him","year":"2008","web_url":"http://www.songnotes.cc/songs/109-she-and-him-volume-one","img_url":"http://fireflygrove.com/songnotes/images/artists/SheAndHim.jpg","id":92,"votes":[]},{"title":"Shelter from the Storm","artist":"Bob Dylan","year":"1975","web_url":"http://www.songnotes.cc/songs/110-bob-dylan-shelter-from-the-storm","img_url":"http://fireflygrove.com/songnotes/images/artists/BobDylan.jpg","id":93,"votes":[]},{"title":"Some Nights","artist":"fun.","year":"2012","web_url":"http://www.songnotes.cc/songs/103-fun-some-nights","img_url":"http://fireflygrove.com/songnotes/images/artists/Fun.png","id":94,"votes":[]},{"title":"Somewhere Only We Know","artist":"Keane","year":"2004","web_url":"http://www.songnotes.cc/songs/82-keane-somewhere-only-we-know","img_url":"http://fireflygrove.com/songnotes/images/artists/Keane.jpg","id":95,"votes":[]},{"title":"Space Oddity","artist":"David Bowie","year":"1969","web_url":"http://www.songnotes.cc/songs/136-david-bowie-space-oddity","img_url":"http://fireflygrove.com/songnotes/images/artists/DavidBowie.jpg","id":96,"votes":[]},{"title":"Stay or Leave","artist":"Dave Matthews","year":"2003","web_url":"http://www.songnotes.cc/songs/48-dave-matthews-stay-or-leave","img_url":"http://fireflygrove.com/songnotes/images/artists/DaveMatthews.jpg","id":97,"votes":[]},{"title":"Stubborn Love","artist":"The Lumineers","year":"2012","web_url":"http://www.songnotes.cc/songs/33-the-lumineers-stubborn-love","img_url":"http://fireflygrove.com/songnotes/images/artists/TheLumineers.png","id":98,"votes":[]},{"title":"Stuck in the Middle With You","artist":"Stealers Wheel","year":"1972","web_url":"http://www.songnotes.cc/songs/91-stealers-wheel-stuck-in-the-middle-with-you","img_url":"http://fireflygrove.com/songnotes/images/artists/StealersWheel.png","id":99,"votes":[]},{"title":"Submarines","artist":"The Lumineers","year":"2012","web_url":"http://www.songnotes.cc/songs/64-the-lumineers-submarines","img_url":"http://fireflygrove.com/songnotes/images/artists/TheLumineers.png","id":100,"votes":[]},{"title":"Sugar Mountain","artist":"Neil Young","year":"1977","web_url":"http://www.songnotes.cc/songs/106-neil-young-sugar-mountain","img_url":"http://fireflygrove.com/songnotes/images/artists/NeilYoung.png","id":101,"votes":[]},{"title":"Summer of '69","artist":"Bryan Adams","year":"1984","web_url":"http://www.songnotes.cc/songs/65-bryan-adams-summer-of-69","img_url":"http://fireflygrove.com/songnotes/images/artists/BryanAdams.jpg","id":102,"votes":[]},{"title":"Sweet Home Alabama","artist":"Lynyrd Skynyrd","year":"1974","web_url":"http://www.songnotes.cc/songs/133-lynyrd-skynyrd-sweet-home-alabama","img_url":"http://fireflygrove.com/songnotes/images/artists/LynyrdSkynyrd.jpg","id":103,"votes":[]},{"title":"Tangled Up in Blue","artist":"Bob Dylan","year":"1975","web_url":"http://www.songnotes.cc/songs/22-bob-dylan-tangled-up-in-blue","img_url":"http://fireflygrove.com/songnotes/images/artists/BobDylan.jpg","id":104,"votes":[]},{"title":"The Drugs Don't Work","artist":"Ben Harper","year":"2001","web_url":"http://www.songnotes.cc/songs/49-ben-harper-the-drugs-dont-work","img_url":"http://fireflygrove.com/songnotes/images/artists/BenHarper.jpg","id":105,"votes":[]},{"title":"The General","artist":"Dispatch","year":"2000","web_url":"http://www.songnotes.cc/songs/26-dispatch-the-general","img_url":"http://fireflygrove.com/songnotes/images/artists/Dispatch.jpg","id":106,"votes":[]},{"title":"The Lion's Roar","artist":"First Aid Kit","year":"2012","web_url":"http://www.songnotes.cc/songs/89-first-aid-kit-the-lions-roar","img_url":"http://fireflygrove.com/songnotes/images/artists/FirstAidKit.png","id":107,"votes":[]},{"title":"The Man in Me","artist":"Bob Dylan","year":"1970","web_url":"http://www.songnotes.cc/songs/24-bob-dylan-the-man-in-me","img_url":"http://fireflygrove.com/songnotes/images/artists/BobDylan.jpg","id":108,"votes":[]},{"title":"The Mother We Share","artist":"Chvrches","year":"2013","web_url":"http://www.songnotes.cc/songs/127-chvrches-the-mother-we-share","img_url":"http://fireflygrove.com/songnotes/images/artists/Chvrches.jpg","id":109,"votes":[]},{"title":"The Needle and the Damage Done","artist":"Neil Young","year":"1972","web_url":"http://www.songnotes.cc/songs/87-neil-young-the-needle-and-the-damage-done","img_url":"http://fireflygrove.com/songnotes/images/artists/NeilYoung.png","id":110,"votes":[]},{"title":"The Weather is Here, Wish You Were Beautiful","artist":"Jimmy Buffett","year":"1981","web_url":"http://www.songnotes.cc/songs/19-jimmy-buffett-the-weather-is-here-wish-you-were-beautiful","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":111,"votes":[]},{"title":"The Weight","artist":"The Band","year":"1968","web_url":"http://www.songnotes.cc/songs/40-the-band-the-weight","img_url":"http://fireflygrove.com/songnotes/images/artists/TheBand.jpg","id":112,"votes":[]},{"title":"Tin Cup Chalice","artist":"Jimmy Buffett","year":"1974","web_url":"http://www.songnotes.cc/songs/25-jimmy-buffett-tin-cup-chalice","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":113,"votes":[]},{"title":"Tiny Dancer","artist":"Elton John","year":"1971","web_url":"http://www.songnotes.cc/songs/13-elton-john-tiny-dancer","img_url":"http://fireflygrove.com/songnotes/images/artists/EltonJohn.jpg","id":114,"votes":[]},{"title":"Trying to Reason with Hurricane Season","artist":"Jimmy Buffett","year":"1974","web_url":"http://www.songnotes.cc/songs/18-jimmy-buffett-trying-to-reason-with-hurricane-season","img_url":"http://fireflygrove.com/songnotes/images/artists/JimmyBuffett.png","id":115,"votes":[]},{"title":"Under the Milky Way","artist":"The Church","year":"1988","web_url":"http://www.songnotes.cc/songs/17-the-church-under-the-milky-way","img_url":"http://fireflygrove.com/songnotes/images/artists/TheChurch.jpg","id":116,"votes":[]},{"title":"Viva La Vida","artist":"Coldplay","year":"2008","web_url":"http://www.songnotes.cc/songs/53-coldplay-viva-la-vida","img_url":"http://fireflygrove.com/songnotes/images/artists/Coldplay.jpg","id":117,"votes":[]},{"title":"Watching the Wheels","artist":"John Lennon","year":"1981","web_url":"http://www.songnotes.cc/songs/5-john-lennon-watching-the-wheels","img_url":"http://fireflygrove.com/songnotes/images/artists/JohnLennon.jpg","id":118,"votes":[]},{"title":"Way Over Yonder in the Minor Key","artist":"Billy Bragg & Wilco","year":"1998","web_url":"http://www.songnotes.cc/songs/112-billy-bragg-wilco-way-over-yonder-in-the-minor-key","img_url":"http://fireflygrove.com/songnotes/images/artists/BillyBraggWilco.jpg","id":119,"votes":[]},{"title":"We Are Never Ever Getting Back Together","artist":"Taylor Swift","year":"2012","web_url":"http://www.songnotes.cc/songs/88-taylor-swift-we-are-never-ever-getting-back-together","img_url":"http://fireflygrove.com/songnotes/images/artists/TaylorSwift.png","id":120,"votes":[]},{"title":"We're Going To Be Friends","artist":"The White Stripes","year":"2001","web_url":"http://www.songnotes.cc/songs/118-the-white-stripes-we-are-going-to-be-friends","img_url":"http://fireflygrove.com/songnotes/images/artists/TheWhiteStripes.jpg","id":121,"votes":[]},{"title":"What I Got","artist":"Sublime","year":"1996","web_url":"http://www.songnotes.cc/songs/20-sublime-what-i-got","img_url":"http://fireflygrove.com/songnotes/images/artists/Sublime.png","id":122,"votes":[]},{"title":"Wind and Walls","artist":"The Tallest Man on Earth","year":"2012","web_url":"http://www.songnotes.cc/songs/79-the-tallest-man-on-earth-wind-and-walls","img_url":"http://fireflygrove.com/songnotes/images/artists/TheTallestManOnEarth.jpg","id":123,"votes":[]},{"title":"With a Little Help From My Friends","artist":"The Beatles","year":"1967","web_url":"http://www.songnotes.cc/songs/81-the-beatles-with-a-little-help-from-my-friends","img_url":"http://fireflygrove.com/songnotes/images/artists/TheBeatles.jpg","id":124,"votes":[]},{"title":"Ya Hey","artist":"Vampire Weekend","year":"2013","web_url":"http://www.songnotes.cc/songs/125-vampire-weekend-ya-hey","img_url":"http://fireflygrove.com/songnotes/images/artists/VampireWeekend.jpg","id":125,"votes":[]},{"title":"You Belong With Me","artist":"Taylor Swift","year":"2008","web_url":"http://www.songnotes.cc/songs/44-taylor-swift-you-belong-with-me","img_url":"http://fireflygrove.com/songnotes/images/artists/TaylorSwift.png","id":126,"votes":[]},{"title":"You Love Me","artist":"DeVotchKa","year":"2004","web_url":"http://www.songnotes.cc/songs/134-devotchka-you-love-me","img_url":"http://fireflygrove.com/songnotes/images/artists/DeVotchKa.jpg","id":127,"votes":[]}]
  }
})