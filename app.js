let frame = document.getElementById('frame').getElementsByTagName('div');
console.log(frame);
console.log(frame.length);

for (let i = 0 ; i < frame.length; i++){
    frame[i].addEventListener('click', function (){
        frame[i].style.backgroundColor = "blue";
    })
}

