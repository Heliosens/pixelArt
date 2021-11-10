let container = document.getElementById('frame');
let frame = container.getElementsByTagName('div');
console.log(frame);
console.log(frame.length);

container.addEventListener('click', function (){
    inBlue();

})


let inBlue = function (){
    for (let i = 0 ; i < frame.length; i++){
        frame[i].addEventListener('mouseover', function (){
            frame[i].style.backgroundColor = "blue";
        })
    }
}

