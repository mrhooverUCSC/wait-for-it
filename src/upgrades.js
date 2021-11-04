let betterBeansRevealed = false
let beansLevel = 0;

function betterBeans(){
    var cost = Math.floor(150 * Math.pow(beansLevel, 1.4));                             //formula for currrent price of better beans
    if(credits >= cost){
        beansLevel++;
        increaseCredits(-cost);
        document.getElementById("betterBeansButton").innerHTML = "Better Beans (" + Math.floor(150 * Math.pow(beansLevel, 1.4)) + " credits)";
        updateCPS();
    }
}

function upgradesCheck(){ //if the requirement has been met, add a new upgrade option
    if(credits >= 100 && !betterBeansRevealed){
        document.getElementById("betterBeansButton").hidden = false;
        betterBeansRevealed = true;
    }
}