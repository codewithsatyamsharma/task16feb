var box = document.querySelector('.box');
var btn = document.querySelector('button');
var arr = ['red', 'green', 'blue'];
var i = 0;
btn.addEventListener('click', () => {
    
    box.style.backgroundColor = arr[i];
    i++;  
    if (i >= arr.length) {
        i = 0;
    }
});