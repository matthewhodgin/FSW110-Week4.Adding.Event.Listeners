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

document.body.addEventListener('wheel',function handleButtonClick() {
    square.style.backgroundColor = 'purple';
})

document.addEventListener("keydown", function(handleKeyboardEvent) {
    square.style.backgroundColor = 'green';
    console.log(handleKeyboardEvent.keydown);
})

document.addEventListener("keydown", function(handleKeyboardEvent) {
    square.style.backgroundColor = 'yellow';
    console.log(handleKeyboardEvent.keydown);
})

//document.addEventListener("keydown", function(event) {
//     console.log(event.which);
// })