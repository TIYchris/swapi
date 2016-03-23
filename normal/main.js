$(document).ready(function() {

  var StarWars = {};

  StarWars.getPerson = function(id, cb){
    $.get("http://swapi.co/api/people/" + id, function(obj) {
      cb(obj);
    });
  }

  StarWars.getPeople = function(page, cb){
    $.get("http://swapi.co/api/people/?page=" + page, function(obj){
          cb(obj);
    });
  };

  StarWars.getFilm = function(id, cb){
    $.get("http://swapi.co/api/films/" + id, function(obj){
          cb(obj);
    });
  };

  StarWars.getFilms = function(page, cb){
    $.get("http://swapi.co/api/films/?page=" + page, function(obj){
          cb(obj);
    });
  };

  StarWars.getPlanet = function(id, cb){
    $.get("http://swapi.co/api/planets/" + id, function(obj){
          cb(obj);
    });
  };

  StarWars.getPlanets = function(page, cb){
    $.get("http://swapi.co/api/planets/?page=" + page, function(obj){
          cb(obj);
    });
  };

  StarWars.getSpecies = function(id, cb){
    $.get("http://swapi.co/api/species/" + id, function(obj){
          cb(obj);
    });
  };

  StarWars.getAllSpecies = function(page, cb){
    $.get("http://swapi.co/api/species/?page=" + page, function(obj){
          cb(obj);
    });
  };
  
   StarWars.getStarship = function(id, cb){
    $.get("http://swapi.co/api/starships/" + id, function(obj){
          cb(obj);
    });
  };

  StarWars.getAllStarchips = function(page, cb){
    $.get("http://swapi.co/api/starships/?page=" + page, function(obj){
          cb(obj);
    });
  };

   StarWars.getVehicle = function(id, cb){
    $.get("http://swapi.co/api/vehicles/" + id, function(obj){
          cb(obj);
    });
  };

  StarWars.getAllVehicles = function(page, cb){
    $.get("http://swapi.co/api/vehicles/?page=" + page, function(obj){
          cb(obj);
    });
  };
});
 