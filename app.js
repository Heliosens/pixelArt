let blue = document.getElementById('blue');
let red = document.getElementById('red');
let white = document.getElementById('white');
let black = document.getElementById('black');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');

let container = document.getElementById('frame');
let frame = container.getElementsByTagName('div');
console.log(frame);
console.log(frame.length);

let colorFrame = blue;
console.log(colorFrame);

container.addEventListener('click', function (){
        for (let i = 0 ; i < frame.length; i++){
            frame[i].addEventListener('mouseover', function (){
                frame[i].style.backgroundColor = colorFrame.toString();
            })
        }
    }
)
