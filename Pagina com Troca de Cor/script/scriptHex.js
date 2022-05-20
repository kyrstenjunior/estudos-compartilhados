let colors = ["#ff0000", "#008000", "#0000ff", "#ee82ee"];
let color = document.querySelector(".color");

function clique (){
    let randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}