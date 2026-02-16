var input = document.querySelector('input');
var display = document.querySelector('.display-text');

input.addEventListener('input', () => {
    
    var text = input.value;
    
    display.textContent = text;
});