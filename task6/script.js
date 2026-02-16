var btn = document.querySelector('button');
var body = document.querySelector('body');


var isDark = false; 

btn.addEventListener('click', () => {
    
    if (isDark === false) {
       
        body.style.backgroundColor = "black";
        body.style.color = "white";
        
        
        isDark = true; 
        
    } else {
        
        body.style.backgroundColor = "white";
        body.style.color = "black";
        
        
        isDark = false;
    }
    
});