let beansContractCurrently = false;
let currentContractUpgrade = 0;
let contractRate = 0.05;
let amountToUpgrade = 0.03;
let timer = 0;

function beansContract(){
    var contractCost = Math.floor(500 + (100 * (currentContractUpgrade)));  
    if(credits >= contractCost){
        document.getElementById("contract").hidden = false;
        document.getElementById("beansContractToggle").hidden = false;
        document.getElementById("beansContractText").innerHTML = "Beans Contract currently turns " + Math.floor(contractRate * 100) + "% of credits into beans every 15 seconds)";
        increaseCredits(-contractCost);
        currentContractUpgrade++;
        contractRate = contractRate + amountToUpgrade;
        amountToUpgrade = amountToUpgrade * 0.85;
        contractCost = Math.floor(500 + (100 * (currentContractUpgrade)));
        document.getElementById("beansContract").innerHTML = "Upgrade Beans Contract (" + contractCost + " credits)";
    }
}

function toggleBeansContract(){
    beansContractCurrently = !beansContractCurrently;
    if(beansContractCurrently){
        document.getElementById("beansContractToggle").innerHTML = "Beans Contract: Currently On";
    }
    else{
        document.getElementById("beansContractToggle").innerHTML = "Beans Contract: Currently Off";
    }
}

function contractsTick(){
    timer += .1; 
    if(timer >= 15){
        if(beansContractCurrently){
            increaseBeans(Math.floor(contractRate * credits));
            increaseCredits(-Math.floor(contractRate * credits));
        }
        timer = 0;
    }
}