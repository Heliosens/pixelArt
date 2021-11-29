let main = document.querySelector('main');
let frame = document.getElementById('frame');
let frameDiv = frame.getElementsByTagName('div');
let spanMod = document.getElementById('mod').getElementsByTagName("span");
let pix = document.getElementById('pix');
let pt = document.getElementById('pt');
let colorBase = document.getElementById('colorBase').getElementsByTagName('div');
let activColor = document.getElementById('activColor');

main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

// choice zone size of picture width / height
let frameWidth = 40;
let frameHeight = 40;

for(let i = 0 ; i < frameWidth*frameHeight ; i++){
    let square = document.createElement('div');
    let size = innerHeight / frameHeight;
    square.style.width = size + 'px';
    square.style.height = size + 'px';
    frame.appendChild(square);
}

let colorFrame = "blue";

for (let i = 0 ; i < colorBase.length ; i++){
    colorBase[i].addEventListener('click', function (){
        colorFrame = colorBase[i].style.backgroundColor;

        activColor.style.backgroundColor = colorFrame;
    })
}

let pixel = function (){
    for (let i = 0 ; i < frameDiv.length; i++) {
        frameDiv[i].addEventListener('click', function () {
            frameDiv[i].style.backgroundColor = colorFrame;
        })
    }
}

let go = 0;

let paint = function (){
    for (let i = 0 ; i < frameDiv.length; i++){
        frameDiv[i].addEventListener('mouseover', function (){
            if(go){
                frameDiv[i].style.backgroundColor = colorFrame;
            }
        })
    }
}

for (let i = 0 ; i < spanMod.length ; i++){
    spanMod[i].addEventListener('click', function (){
        switch (i){
            case 0 :
                go = 0;
                pixel();
                pix.style.border = "1px solid yellow";
                pt.style.border = "unset";
                break;
            case 1 :
                go++;
                paint();
                pt.style.border = "1px solid yellow"
                pix.style.border = "unset";
                break;
        }

    })
}

