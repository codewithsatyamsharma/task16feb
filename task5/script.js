var display = document.querySelector('.number');
var addBtn = document.querySelector('#add');
var subBtn = document.querySelector('#subtract');

var count = 0;

addBtn.addEventListener('click', () => {
    count++; 
    display.innerHTML = count; 
});


subBtn.addEventListener('click', () => {
   
    if (count > 0) {
        count--; 
        display.innerHTML = count; 
    }
});