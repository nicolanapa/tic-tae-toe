const displayBoard = (function() {
    let partContainer = document.querySelector("#container");
    for ( let i = 1; i <= 9; i++ ) {
        let part = document.createElement("div");
        part.classList.add("block");
        partContainer.appendChild(part);
    }
})();

const nothing = "vuoto";
const xMarker = "X";
const oMarker = "O";

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

function winAlgorithm() {
    gameboard;
    let placement = prompt("Scegli il posto di X o O (X1, X2, X3 / O1, O2, O3)");
    if ( placement === "X1" ) {
        gameboard.gameRow1[0] = xMarker;
    }
    if ( placement === "X2" ) {
        gameboard.gameRow1[1] = xMarker;
    }
    if ( placement === "X3" ) {
        gameboard.gameRow1[2] = xMarker;
    }

}