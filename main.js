const planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

planets.forEach(function(planet){
  let planetNames = planet[0];
  let option = document.createElement("option");
  let worlds = document.getElementById("planets");
  option.innerHTML = planetNames; 
  worlds.appendChild(option); 
});

function calculateWeight(weight, planetName) {
    for(let i = 0; i < planets.length; i++){
      if (planets[i][0] == planetName){
      return weight * planets[i][1];
    }
   }
  }

function handleClickEvent() {
    let userWeight = document.getElementById("user-weight").value;
    let planetName = document.getElementById("planets").value;
    let result = calculateWeight(userWeight, planetName);
    document.getElementById("output").innerHTML= "If you were on  " + planetName + ", you would weigh " + result + "lbs!";
}
  
document.getElementById("calculate-button").addEventListener("click", handleClickEvent);

