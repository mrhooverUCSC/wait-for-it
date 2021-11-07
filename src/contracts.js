let beansContractCurrently = false;
let currentContractUpgrade = 0;
let contractRate = 0.05;
let amountToUpgrade = 0.03;
let timer = 0;

function beansContract(){
    var contractCost = Math.floor(500 + (100 * (currentContractUpgrade)));
    if(currentContractUpgrade > 0){
        var contractCost = Math.floor(500 + (100 * (currentContractUpgrade)));  
        if(credits >= contractCost){
            increaseCredits(-contractCost);
            document.getElementById("beansContract").innerHTML = "Upgrade Beans Contract (" + contractCost + " credits)";
            currentContractUpgrade++;
            contractRate = contractRate + amountToUpgrade;
            amountToUpgrade = amountToUpgrade * 0.9;
            document.getElementById("beansContractText").innerHTML = "Beans Contract turns " + Math.floor(contractRate * 100) + "% credits into beans every 15 seconds)";
        }
    }
    else if(credits >= 250 && !beansContractCurrently && currentContractUpgrade < 1){
        increaseCredits(-250);
        //document.getElementById("beansContract").hidden = true;
        document.getElementById("beansContract").innerHTML = "Upgrade Beans Contract (" + contractCost + " credits)";
        document.getElementById("beansContractToggle").hidden = false;
        currentContractUpgrade++;
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