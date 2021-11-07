let baristasRevealed = false;
let beansContractRevealed = false;
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

function largerStore(){
    var cost = Math.floor(100 * Math.pow(baristaMax, 1.4));                             //formula for currrent price of better beans
    if(credits >= cost){
        baristaMax++;
        increaseCredits(-cost);
        document.getElementById("largerStoreButton").innerHTML = "Larger Store " + baristaMax + " (" + Math.floor(100 * Math.pow(baristaMax, 1.4)) + " credits)";
        document.getElementById("sellBaristas").innerHTML = "Sell Baristas: " + sellBaristas + "/" + baristaMax;
        document.getElementById("brewBaristas").innerHTML = "Brew Baristas: " + brewBaristas + "/" + baristaMax;
    }
}

function upgradesCheck(){ //if the requirement has been met, add a new upgrade option
    if(credits >= 50 && !baristasRevealed){ //when 50 credits earned, 
        document.getElementById("brewBaristaButton").hidden = false;
        document.getElementById("sellBaristaButton").hidden = false;
        document.getElementById("largerStoreButton").hidden = false;
        document.getElementById("baristasRow").hidden = false;
        document.getElementById("baristasText").style.display = "block";
        baristasRevealed = true;
    }
    if(credits >= 250 && !beansContractRevealed){
        document.getElementById("beansContract").hidden = false;
        document.getElementById("beansContractText").style.display = "block";
        beansContractRevealed = true;
    }
    //if(credits >= 100 && !betterBeansRevealed){
    //    document.getElementById("betterBeansButton").hidden = false;
    //    betterBeansRevealed = true;
    //}
}