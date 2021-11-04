let credits = 0;

function myFunction(){
    increaseCredits(1);
}

function f(){ //test function
    console.log("f");
}

function makeButton(){
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

window.setInterval(function(){ //tick every .1 seconds
    buildingsTick();
    upgradesCheck();
}, 100);