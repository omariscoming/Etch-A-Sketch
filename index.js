const display = document.querySelector('.display');
const displaySize = window.getComputedStyle(display).width;
const displayPadding = window.getComputedStyle(display).padding;
const displaySizeInNumber = Number(displaySize.replace('px',''))
const displayPaddingInNumber = Number(displayPadding.replace('px','')) * 2
let gridSize = 10
//display size/50
console.log(displayPaddingInNumber)

let isMouseDown = false;

// Track global mouse down/up events
document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

function createGrid(gridSize){
    display.innerHTML = '';
    const squares = gridSize **2
    for (let i=0; i < squares; i++) {
        const squareSize = (displaySizeInNumber - displayPaddingInNumber) / gridSize
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.style.border = `0.5px solid #a6a6a6`;
        div.style.boxSizing = 'border-box';
        display.appendChild(div);
        div.addEventListener('mouseover', () => {
            if (isMouseDown) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                display.style.boxShadow = `rgba(${r}, ${g}, ${b}, 0.60) 0px 10px 15px`
                div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        });
    }
}


const input = document.querySelector('input');
const gridSizeDisplay = document.querySelector('.grid-size-display');
input.addEventListener('input', () => {
    if (input.value <= 100 && input.value >= 1) {
        gridSizeDisplay.innerHTML= `<p>${input.value} × ${input.value}</p>`
        createGrid(input.value)
    }else {
        input.value = ''
        gridSizeDisplay.innerHTML = ''
        alert('You Must Enter a number between 0 - 100')
    }
})

const restBtn = document.querySelector('.rest-btn');
restBtn.addEventListener('click', () => {

    const squares = document.querySelectorAll(".square")
    for (let i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = ``;
        display.style.boxShadow = ''
    }
})
