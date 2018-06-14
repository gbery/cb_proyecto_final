pokes = [
  {
    "id":"001",
    "name":"Charmander",
    "photo":"01",
    "type":"fire"
  },
  {
    "id":"002",
    "name":"Kanjaskan",
    "photo":"02",
    "type":"fighting"
  },
  {
    "id":"003",
    "name":"Mewtwo",
    "photo":"03",
    "type":"fairy"
  },
  {
    "id":"004",
    "name":"Blastoise",
    "photo":"04",
    "type":"water"
  },
  {
    "id":"005",
    "name":"Bulbasaur",
    "photo":"05",
    "type":"grass"
  },
  {
    "id":"006",
    "name":"Magikarp",
    "photo":"06",
    "type":"water"
  },
  {
    "id":"007",
    "name":"Pikachu",
    "photo":"07",
    "type":"electric"
  },
  {
    "id":"008",
    "name":"Gengar",
    "photo":"08",
    "type":"ghost"
  },
  {
    "id":"009",
    "name":"Vamoacalmarno",
    "photo":"09",
    "type":"water"
  }
];

function poke() {

    var content = "";

    for(var i=0;i<pokes.length;i++){
        content += "<div class='pokeItem'>";
        content += "<img class ='pokeImage' src=' photos/"+ pokes[i].photo +".jpg'>";
        content += "<h1 class = 'name'>" + pokes[i].name + "</h1>";
        content += "<div class='smallDiv'>"
        content += "<p class = 'pokeId'>" + pokes[i].id +"</p>";
        content += "<img class = 'type' src=' types/"+ pokes[i].type +".png'>";
        content += "</div>"
        content += "</div>";
    }

    console.log(content);
    document.getElementById("result").innerHTML = content;
}



function showPokemon(query) {
  var result = "";
  
  if(query == null){
    console.log("Voy a mostrar todos");
    for(var i=0; i<pokes.length; i++){
      result += pokes[i].name + "<br>";
    }
    document.getElementById("result").innerHTML = result;
  } else {
    console.log(query);
    for(var i=0; i<pokes.length; i++){
      if(pokes[i].name.toLowerCase().search(query) >= 0){
        result += "<div class='pokeItem'>";
        result += "<img class ='pokeImage' src=' photos/"+ pokes[i].photo +".jpg'>";
        result += "<h1 class = 'name'>" + pokes[i].name + "</h1>";
        result += "<div class='smallDiv'>"
        result += "<p class = 'pokeId'>" + pokes[i].id +"</p>";
        result += "<img class = 'type' src=' types/"+ pokes[i].type +".png'>";
        result += "</div>"
        result += "</div>";      }
    }
    document.getElementById("result").innerHTML = result;
  }
}

function searchPokemon() {
  var query = document.getElementById("query").value;
  console.log(query)
  showPokemon(query);
}