var box = document.querySelector('.box');

box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'blue';
});

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'red';
});