document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert(`O Jogo Acabou - O Jogador ${playerTime} venceu!`);
        }, 15);
    };

    updateSquare(position);

}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function resetarGame(){
    board.forEach((element,index) => {
        board[index] = '';
    });
    playerTime = 0;
    gameOver = false;
    board.forEach((element, index) => {
        updateSquares(index);
    })
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}