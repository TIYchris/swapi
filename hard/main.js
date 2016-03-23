$(document).ready(function() {

    var StarWars = {};

    function get(url, cb) {
        var value = localStorage.getItem(url);
        if (value) {
            var obj = JSON.parse(value);
            return cb(obj);
        }

        $.get(url, function(obj) {
            var value = JSON.stringify(obj);
            localStorage.setItem(url, value);
            cb(obj);
        });
    }

    StarWars.getPerson = function(id, cb) {
        get("http://swapi.co/api/people/" + id, cb);
    }

    StarWars.getPeople = function(page, cb) {
        get("http://swapi.co/api/people/?page=" + page, cb);
    };

    StarWars.getFilm = function(id, cb) {
        get("http://swapi.co/api/films/" + id, cb);
    };

    StarWars.getFilms = function(page, cb) {
        get("http://swapi.co/api/films/?page=" + page, cb);
    };

    StarWars.getPlanet = function(id, cb) {
        get("http://swapi.co/api/planets/" + id, cb);
    };

    StarWars.getPlanets = function(page, cb) {
        get("http://swapi.co/api/planets/?page=" + page, cb);
    };

    StarWars.getSpecies = function(id, cb) {
        get("http://swapi.co/api/species/" + id, cb);
    };

    StarWars.getAllSpecies = function(page, cb) {
        get("http://swapi.co/api/species/?page=" + page, cb);
    };

    StarWars.getStarship = function(id, cb) {
        get("http://swapi.co/api/starships/" + id, cb);
    };

    StarWars.getAllStarchips = function(page, cb) {
        get("http://swapi.co/api/starships/?page=" + page, cb);
    };

    StarWars.getVehicle = function(id, cb) {
        get("http://swapi.co/api/vehicles/" + id, cb);
    };

    StarWars.getAllVehicles = function(page, cb) {
        get("http://swapi.co/api/vehicles/?page=" + page, cb);
    };

    StarWars.getPerson(1, function(obj) {
        console.log(obj);
    });
});
