var p = document.querySelector('p')
var btn = document.querySelector('button')

// var color = false

btn.addEventListener( 'click' ,() => {
    if(p.textContent == "Welcome") {
        p.textContent = "Hello";
    }else {
        p.textContent = "Welcome";
    }
})