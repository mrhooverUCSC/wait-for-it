let brewBaristas = 0;
let brewEfficacy = .1
let sellBaristas = 0;
let sellEfficacy = .1
let baristaMax = 1;
let cps = 0;

function buyBrewBarista(){
    var cost = Math.floor(10 * (brewBaristas + 1));                             //formula for currrent price of Baristas
    if(credits >= cost && brewBaristas < baristaMax){
        brewBaristas++;
        increaseCredits(-cost);
        document.getElementById("brewBaristas").innerHTML = "Brew Baristas: " + brewBaristas + "/" + baristaMax;
        document.getElementById("brewBaristaButton").innerHTML = "Brew Barista (" + Math.floor(10 * (brewBaristas + 1)) + " credits)";
    }
}

function buySellBarista(){
    var cost = Math.floor(25 * (sellBaristas + 1));                             //formula for currrent price of Baristas
    if(credits >= cost && sellBaristas < baristaMax){
        sellBaristas++;
        increaseCredits(-cost);
        document.getElementById("sellBaristas").innerHTML = "Sell Baristas: " + sellBaristas + "/" + baristaMax;
        document.getElementById("sellBaristaButton").innerHTML = "Sell Barista (" + Math.floor(10 * (sellBaristas + 1)) + " credits)";
    }
}

function updateCPS(){
    //cps = currentBaristas * (1 + (beansLevel * .1));
    //console.log(beansLevel);
    //document.getElementById("cps").innerHTML = "Credits Per Second: " + cps;
}

function buildingsTick(){   //tick every .1 seconds
    if(brewBaristas > 0){//brew baristas brew .1 beans into .1 coffee per second
        if((brewBaristas * brewEfficacy) <= coffeeBeans){
            increaseBeans(-(brewBaristas * brewEfficacy));
            increaseCoffee(brewBaristas * brewEfficacy);
        }
        else{
            increaseCoffee(coffeeBeans);
            increaseBeans(-coffeeBeans);
        }
    }
    if(sellBaristas > 0){//sell baristas sell .1 coffees into .5 credits per second
        if((sellBaristas * sellEfficacy) <= coffee){
            increaseCoffee(-(sellBaristas * sellEfficacy));
            increaseCredits(sellBaristas * sellEfficacy * 5);
        }
        else{
            increaseCredits(coffee * 5);
            increaseCoffee(-coffee);
        }
    }
}