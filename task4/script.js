var box = document.querySelector('.box');
var btnLeft = document.querySelector('#left');
var btnRight = document.querySelector('#right');

var rotateValue = 0;


btnRight.addEventListener('click', () => {
    rotateValue = rotateValue + 45; 
    box.style.transform = `rotate(${rotateValue}deg)`;
});


btnLeft.addEventListener('click', () => {
    rotateValue = rotateValue - 45; 
    box.style.transform = `rotate(${rotateValue}deg)`;
});