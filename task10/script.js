var redLight = document.querySelector('#red');
var yellowLight = document.querySelector('#yellow');
var greenLight = document.querySelector('#green');
var stopBtn = document.querySelector('#stopBtn');
var readyBtn = document.querySelector('#readyBtn');
var goBtn = document.querySelector('#goBtn');

function resetLights() {
    redLight.style.backgroundColor = "#555";
    yellowLight.style.backgroundColor = "#555";
    greenLight.style.backgroundColor = "#555";
}


stopBtn.addEventListener('click', () => {
    resetLights(); 
    redLight.style.backgroundColor = "red";
});

readyBtn.addEventListener('click', () => {
    resetLights();
    yellowLight.style.backgroundColor = "yellow";
});

goBtn.addEventListener('click', () => {
    resetLights();
    greenLight.style.backgroundColor = "#00ff00"; 
});