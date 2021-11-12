let main = document.querySelector('main');
let frame = document.getElementById('frame');
let frameDiv = frame.getElementsByTagName('div');
let spanMod = document.getElementById('mod').getElementsByTagName("span");
let colorBase = document.getElementById('colorBase').getElementsByTagName('div');
let activColor = document.getElementById('activColor');

main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

let colorFrame = "blue";

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
            // frameDiv[i].style.borderColor = colorFrame;
        })
    }
}

let paint = function (){
    for (let i = 0 ; i < frameDiv.length; i++){
        frameDiv[i].addEventListener('mouseover', function (){
            frameDiv[i].style.backgroundColor = colorFrame;
        })
    }
}

for (let i = 0 ; i < spanMod.length ; i++){
    spanMod[i].addEventListener('click', function (){
        console.log("i = " + i);

        switch (i){
            case 0 :
                console.log("pixel");
                pixel();
                break;
            case 1 :
                console.log("paint");
                paint();
                break;
        }

    })
}

