app = angular.module('starter');
app.factory('SelectionCache', function(){

    // mock an "active" bar out of all available bars - this should be
    // automatically resolved when the backend is implemented
    var activeBar = {};
    var activeUser = {};

    return {
        setActiveBar: function(bar){
            activeBar = bar;
        },
        getActiveBar: function(){
            return activeBar;
        },
        setActiveUser: function(user){
            activeUser = user;
        },
        getActiveUser: function(){
            return activeUser;
        }
    }
    }
)