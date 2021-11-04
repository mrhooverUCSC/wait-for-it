let currentBaristas = 0;
let cps = 0;

function buyBarista(){
    var cost = Math.floor(10 * (currentBaristas + 1));                             //formula for currrent price of Baristas
    if(credits >= cost){
        currentBaristas++;
        increaseCredits(-cost);
        document.getElementById("Baristas").innerHTML = "Baristas: " + currentBaristas;
        document.getElementById("BaristaButton").innerHTML = "Barista (" + Math.floor(10 * (currentBaristas + 1)) + " credits)";
        updateCPS();
    }
}

function updateCPS(){
    cps = currentBaristas * (1 + (beansLevel * .1));
    console.log(beansLevel);
    document.getElementById("cps").innerHTML = "Credits Per Second: " + cps;
}

function buildingsTick(){   //tick every .1 seconds
    increaseCredits(cps * .1); //function of number of baristas and the upgrades applied
}