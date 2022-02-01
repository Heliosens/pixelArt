let main = document.querySelector('main');
let frame = document.getElementById('frame');
let frameDiv = frame.getElementsByTagName('div');
let spanMod = document.getElementById('mod').getElementsByTagName("span");
let pix = document.getElementById('pix');
let pt = document.getElementById('pt');
let colorBase = document.getElementById('colorBase').getElementsByTagName('div');
let activColor = document.getElementById('activColor');

frame.style.width = (innerWidth * .9) / 2 + "px";
frame.style.height = (innerHeight * .9) + "px";

// choice zone size of picture width / height
let col = 30;
// let line = 30;

// create each square
for(let i = 0 ; i < col ** 2 ; i++){
    let square = document.createElement('div');
    square.style.display = "flex";
    square.style.width = 100 / col + "%";
    square.style.paddingBottom = 100 / col + "%";

    frame.appendChild(square);
}

// default color
let colorFrame = "blue";

/**     todo create colorBase square
 *      give each colorBase a RGB background color
 *      create table of value x,y,z => 0 to 255
 *      on click get the RGB code
 **/

// create colorBase square
let numOfColorBase = 12;


for (let i = 0 ; i < colorBase.length ; i++){
    colorBase[i].addEventListener('click', function (){
        colorFrame = colorBase[i].id;
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

