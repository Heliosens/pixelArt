let blue = document.getElementById('blue');
let red = document.getElementById('red');
let white = document.getElementById('white');
let black = document.getElementById('black');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let orange = document.getElementById('orange');

let frame = document.getElementById('frame');
let frameDiv = frame.getElementsByTagName('div');

console.log(frameDiv.length);

let colorBase = document.getElementById('colorBase').getElementsByTagName('div');
console.log(colorBase);

let colorFrame = "blue";

for (let i = 0 ; i < colorBase.length ; i++){
    colorBase[i].addEventListener('click', function (){
        colorFrame = colorBase[i].id;
    })
}

console.log(colorFrame);

frame.addEventListener('click', function (){
        for (let i = 0 ; i < frameDiv.length; i++){
            frameDiv[i].addEventListener('mouseover', function (){
                frameDiv[i].style.backgroundColor = colorFrame;
                frameDiv[i].style.borderColor = colorFrame;
            })
        }
    }
)
