let colors = ["Red", "Green", "Blue", "Violet"];
let color = document.querySelector(".color");

function clique (){
    let randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}