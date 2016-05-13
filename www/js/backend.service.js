app = angular.module('Mocks');
app.run(function($httpBackend, BackendData) {
        // returns a the list of available bars
        $httpBackend.whenGET('/bars').respond(function (method, url, data) {
            return [200, BackendData.bars];
        });

        $httpBackend.whenGET('/song/:id').respond(function (method, url, data, headers, params) {
            var song = _.filter(BackendData.songs, function(o){ return o.id === params.id});
            if (song) return [404, null];
            return [200, song];
        })
    }
)