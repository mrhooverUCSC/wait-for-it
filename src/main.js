let credits = 0;
let coffeeBeans = 0;
let coffee = 0;

function borrowCredits(){
    increaseCredits(1);
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