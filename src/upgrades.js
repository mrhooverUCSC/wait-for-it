let baristasRevealed = false;
let beansContractRevealed = false;
let expandedMenuRevealed = false;
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
        document.getElementById("sellBaristaButton").hidden = false;
        document.getElementById("sellBaristas").hidden = false;
        document.getElementById("baristasText").innerHTML = "Brew Baristas turn beans into coffee. Sell Baristas sell coffee for credits."
        document.getElementById("sellBaristas").innerHTML = "Sell Baristas: " + sellBaristas + "/" + (baristaMax-1);
        document.getElementById("brewBaristas").innerHTML = "Brew Baristas: " + brewBaristas + "/" + baristaMax;
    }
}

function surpass(){
    if(credits >= 1000){
        increaseCredits(-1000);
        document.getElementById("surpass").hidden = true;
        document.getElementById("teachSellBaristas").hidden = false;
        document.getElementById("cupcakesRow").hidden = false;
        document.getElementById("buyFlour").hidden = false;
        document.getElementById("makeCupcakes").hidden = false;
        document.getElementById("sellCupcakes").hidden = false;
    }
}

function surpass2(){
    if(credits >= 1000){
        increaseCredits(-1000);
        document.getElementById("teachSellBaristas").hidden = true;
        document.getElementById("baristasText").innerHTML = "Brew Baristas turn beans into coffee. Sell Baristas sell coffee and cupcakes for credits."
        taughtBaristas = true;
    }
}

function upgradesCheck(){ //if the requirement has been met, add a new upgrade option
    if(credits >= 50 && !baristasRevealed){ //when 50 credits earned, 
        document.getElementById("brewBaristaButton").hidden = false;
        document.getElementById("largerStoreButton").hidden = false;
        document.getElementById("brewBaristas").hidden = false;
        document.getElementById("baristasText").style.display = "block";
        baristasRevealed = true;
    }
    if(credits >= 250 && !beansContractRevealed){
        document.getElementById("beansContract").hidden = false;
        document.getElementById("beansContractText").style.display = "block";
        beansContractRevealed = true;
    }
    if(credits >= 750 && !expandedMenuRevealed){
        document.getElementById("surpass").hidden = false;
        expandedMenuRevealed = true;
    }
    //if(credits >= 100 && !betterBeansRevealed){
    //    document.getElementById("betterBeansButton").hidden = false;
    //    betterBeansRevealed = true;
    //}
}