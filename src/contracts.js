let beansContractCurrently = false;
let timer = 0;

function beansContract(){
    if(credits >= 250){
        increaseCredits(-250);
        document.getElementById("beansContract").hidden = true;
        document.getElementById("beansContractToggle").hidden = false;
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
            if(credits > 10){
                increaseCredits(-10);
                increaseBeans(10);
            }
            else{
                increaseBeans(credits);
                increaseCredits(-credits);
            }
        }
        timer = 0;
    }
}