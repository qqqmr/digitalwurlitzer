app = angular.module('starter');
app.factory('GlobalBarsApi', function($http, $log) {

    // this is a helper endpoint, this should not be available on a single bar endpoint (e.g. RPi)
    // The information, which bar should be used by this endpoint will be automatically resolved by
    // the physical presence of the user (in BAR X)
    // in future versions, this info should be found on a central webAPI server via JSONP
    var ENDPOINT = "/bars";


    function _getAllBars(){
        return $http.get(ENDPOINT);
    }

    return {
        'getAllBars': _getAllBars
    }

    /*function getBarById(id)
    {
        alert("ok");
        var json = JSON.parse(_getAllBars());
        $.each(JSON.parse(json), function (idx, obj) {
            if (obj.id == id) {
                return obj;
            }
        });
        return null;
    }*/

})