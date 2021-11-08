let credits = 0;
let debt = 0;
let coffeeBeans = 0;
let coffee = 0;
let flour = 0;
let cupcakes = 0;

function borrowCredits(){
    increaseCredits(1);
    debt++;
    document.getElementById("payoffDebt").hidden = false;
    document.getElementById("payoffDebt").innerHTML = "Pay Debt: " + debt;
}
function payDebt(){
    if(debt > 0 && credits >= debt){
        increaseCredits(-debt);
        debt = 0;
        document.getElementById("payoffDebt").hidden = true;
        document.getElementById("payoffDebt").innerHTML = "Pay Debt: " + 0;    
    }
    else if(debt > 0 && credits <= debt){
        debt = debt - credits;
        increaseCredits(-credits);
        document.getElementById("payoffDebt").innerHTML = "Pay Debt: " + debt;    
    }
}
function buyBeans(){
    if(credits >= 1){
        increaseCredits(-1);
        increaseBeans(1);
    }
}
function makeCoffee(){
    if(coffeeBeans >= 1){
        increaseBeans(-1);
        increaseCoffee(1);
    }
}
function sellCoffee(){
    if(coffee >= 1){
        increaseCoffee(-1);
        increaseCredits(5);
    }
}
function buyFlour(){
    if(credits >= 1){
        increaseCredits(-1);
        increaseFlour(1);
    }
}
function makeCupcakes(){
    if(flour >= 2){
        increaseFlour(-2);
        increaseCupcakes(1);
    }
}
function sellCupcakes(){
    if(cupcakes >= 1){
        increaseCupcakes(-1);
        increaseCredits(10);
    }
}

function f(){ //test function
    console.log("f");
}
function makeButton(){ //example function
    let btn = document.createElement("button");
    btn.innerHTML = "Button!";
    document.body.appendChild(btn);
    btn.onclick = function () {
        console.log("hello");
    }
}

function increaseCredits(increase){
    credits += increase;
    document.getElementById("credits").innerHTML = "Credits: " + Math.floor(credits);
}
function increaseBeans(increase){
    coffeeBeans += increase;
    document.getElementById("coffeeBeans").innerHTML = "Coffee Beans: " + Math.floor(coffeeBeans);
}
function increaseCoffee(increase){
    coffee += increase;
    document.getElementById("coffee").innerHTML = "Coffee: " + Math.floor(coffee);
}
function increaseFlour(increase){
    flour += increase;
    document.getElementById("flour").innerHTML = "Flour: " + Math.floor(flour);
}
function increaseCupcakes(increase){
    cupcakes += increase;
    document.getElementById("cupcakes").innerHTML = "Cupcakes: " + Math.floor(cupcakes);
}


window.setInterval(function(){ //tick every .1 seconds
    if(credits==0){
        document.getElementById("clicker").hidden = false;
    }
    else{
        document.getElementById("clicker").hidden = true;
    }
    buildingsTick();
    contractsTick();
    upgradesCheck();
}, 100);
