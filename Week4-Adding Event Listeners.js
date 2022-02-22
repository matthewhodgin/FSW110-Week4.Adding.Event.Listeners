const square = document.getElementById('square')
document.body.onload = function backgroundColor(){
    square.style.backgroundColor = 'black';
}

square.addEventListener('mouseover',function handleButtonClick() {
    square.style.backgroundColor = 'green';
})

square.addEventListener('mousedown',function handleButtonClick() {
    square.style.backgroundColor = 'yellow';
})

square.addEventListener('mouseup',function handleButtonClick() {
    square.style.backgroundColor = 'blue';
})

square.addEventListener('dblclick',function handleButtonClick() {
    square.style.backgroundColor = 'red';
})

window.addEventListener('wheel',function handleButtonClick() {
    square.style.backgroundColor = 'purple';
})

document.addEventListener('keydown', function(ev) {
    if (ev.key == 'g'){square.style.backgroundColor = 'green';}
    if (ev.key == 'y'){square.style.backgroundColor = 'yellow';}
    if (ev.key == 'r'){square.style.backgroundColor = 'red';}
    if (ev.key == 'b'){square.style.backgroundColor = 'blue';}
    if (ev.key == 'p'){square.style.backgroundColor = 'purple';}
    
})

