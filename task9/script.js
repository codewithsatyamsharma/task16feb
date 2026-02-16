var btn = document.querySelector('button');
var msg = document.querySelector('.message');

btn.addEventListener('click', () => {
   
    msg.textContent = "Button Clicked";
    
    
    btn.disabled = true;
    
    btn.textContent = "Done";
});