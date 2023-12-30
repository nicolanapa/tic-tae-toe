const displayBoard = (function() {
    let partContainer = document.querySelector("#container");
    for ( let i = 1; i <= 9; i++ ) {
        let part = document.createElement("div");
        part.classList.add("block");
        partContainer.appendChild(part);
    }
})();

const nothing = "vuoto";

let gameboard = {
    gameRow1: [nothing, nothing, nothing],
    gameRow2: [nothing, nothing, nothing],
    gameRow3: [nothing, nothing, nothing],
};

function Player(name) {
    this.name = name;
}

let X = new Player("X");
let O = new Player("O");