let logicalBoard = ["", "", "", "", "", "", "", "", ""];
const displayBoard = (function() {
    let partContainer = document.querySelector("#container");
    for ( let i = 1; i <= 9; i++ ) {
        let part = document.createElement("div");
        part.classList.add("block");
        part.setAttribute("id", "blockId");
        logicalBoard[i - 1] = part;
        partContainer.appendChild(part);
        part.addEventListener("click", () => {
            winAlgorithm(part, partContainer);
            if ( win ) {
                logicalBoard.forEach(part => {
                    part.innerText = "";
                });
                win = false;
            }
        });
    }
    //let buttons_container = document.querySelector("#buttons");
    let start = document.getElementById("start");
    let restart = document.getElementById("restart");
    start.addEventListener("click", () => {
        location.reload();
    });
    restart.addEventListener("click", () => {
        location.reload();
    });
})();

const nothing = "vuoto";
const xMarker = "X";
const oMarker = "O";



let gameboard = {
    //gameRow1: [nothing, nothing, nothing],
    //gameRow2: [nothing, nothing, nothing],
    //gameRow3: [nothing, nothing, nothing],
    game: [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]],
};

/*function Player(name) {
    this.name = name;
}*/

// let X = new Player("X");
// let O = new Player("O");
let X = prompt("Nome player X", "");
let O = prompt("Nome player O", "");
let playerSelection = 0;
let playerSelection2 = document.createElement("div");
playerSelection2.innerText = "Turno di " + X + " (X)";
let playerSelection3 = document.querySelector("#name");
playerSelection3.appendChild(playerSelection2);

let win = false;



function winAlgorithm(part, partContainer) {
    gameboard;
    let winShow0 = "";
    //let playerDecision = prompt("Scegliere se sei X o O", "X");
    playerSelection += 1;
    
    if ( playerSelection == 1 ) {
        playerSelection2.innerText = "Turno di "+ O + " (O)";
        playerSelection3.appendChild(playerSelection2);
        xPlayer();
    }
    else {
        playerSelection = 0;
        playerSelection2.innerText = "Turno di " + X + " (X)";
        playerSelection3.appendChild(playerSelection2);
        oPlayer();
    }

    /*if ( playerDecision == "X" ) {
        xPlayer();
    }
    else {
        oPlayer();
    }*/

    function xPlayer() {
        //let placementRow = prompt("Scegli la riga (1, 2, 3)", 1);
        //placementRow = Number(placementRow);
        //let placement = prompt("Scegli la posizione (1, 2, 3)", 1);
        //placement = Number(placement);
        //checkIfNothing(placementRow, placement);
        /*if ( placementRow === 1 ) {
            if ( placement === 1 ) {
                gameboard.game[0][0] = xMarker;
            }
            else if ( placement === 2 ) {
                gameboard.game[0][1] = xMarker;
            }
            else if ( placement === 3 ) {
                gameboard.game[0][2] = xMarker;
            }
        }
        if ( placementRow === 2 ) {
            if ( placement === 1 ) {
                gameboard.game[1][0] = xMarker;
            }
            else if ( placement === 2 ) {
                gameboard.game[1][1] = xMarker;
            }
            else if ( placement === 3 ) {
                gameboard.game[1][2] = xMarker;
            }
        }
        if ( placementRow === 3 ) {
            if ( placement === 1 ) {
                gameboard.game[2][0] = xMarker;
            }
            else if ( placement === 2 ) {
                gameboard.game[2][1] = xMarker;
            }
            else if ( placement === 3 ) {
                gameboard.game[2][2] = xMarker;
            }
        }*/
        if ( logicalBoard[0] === part ) {
            checkIfNothing(0, 0);
            gameboard.game[0][0] = xMarker;
            part.innerText = xMarker;
        }
        else if ( logicalBoard[1] === part ) {
            checkIfNothing(0, 1);
            gameboard.game[0][1] = xMarker;
            part.innerText = xMarker;
        }
        else if ( logicalBoard[2] === part ) {
            checkIfNothing(0, 2);
            gameboard.game[0][2] = xMarker;
            part.innerText = xMarker;
        }
        else if ( logicalBoard[3] === part ) {
            checkIfNothing(1, 0);
            gameboard.game[1][0] = xMarker;
            part.innerText = xMarker;
        }
        else if ( logicalBoard[4] === part ) {
            checkIfNothing(1, 1);
            gameboard.game[1][1] = xMarker;
            part.innerText = xMarker;
        }
        else if ( logicalBoard[5] === part ) {
            checkIfNothing(1, 2);
            gameboard.game[1][2] = xMarker;
            part.innerText = xMarker;
        }
        else if ( logicalBoard[6] === part ) {
            checkIfNothing(2, 0);
            gameboard.game[2][0] = xMarker;
            part.innerText = xMarker;
        }
        else if ( logicalBoard[7] === part ) {
            checkIfNothing(2, 1);
            gameboard.game[2][1] = xMarker;
            part.innerText = xMarker;
        }
        else if ( logicalBoard[8] === part ) {
            checkIfNothing(2, 2);
            gameboard.game[2][2] = xMarker;
            part.innerText = xMarker;
        }
    }

    function oPlayer() {
        //let placementRow = prompt("Scegli la riga (1, 2, 3)", "1");
        //placementRow = Number(placementRow);
        //let placement = prompt("Scegli la posizione (1, 2, 3)", "1");
        //placement = Number(placement);
        //checkIfNothing(placementRow, placement);
        /*if ( placementRow === 1 ) {
            if ( placement === 1 ) {
                gameboard.game[0][0] = oMarker;
            }
            else if ( placement === 2 ) {
                gameboard.game[0][1] = oMarker;
            }
            else if ( placement === 3 ) {
                gameboard.game[0][2] = oMarker;
            }
        }
        if ( placementRow == 2 ) {
            if ( placement === 1 ) {
                gameboard.game[1][0] = oMarker;
            }
            else if ( placement === 2 ) {
                gameboard.game[1][1] = oMarker;
            }
            else if ( placement === 3 ) {
                gameboard.game[1][2] = oMarker;
            }
        }
        if ( placementRow === 3 ) {
            if ( placement === 1 ) {
                gameboard.game[2][0] = oMarker;
            }
            else if ( placement === 2 ) {
                gameboard.game[2][1] = oMarker;
            }
            else if ( placement === 3 ) {
                gameboard.game[2][2] = oMarker;
            }
        }*/
        if ( logicalBoard[0] === part ) {
            checkIfNothing(0, 0);
            gameboard.game[0][0] = oMarker;
            part.innerText = oMarker;
        }
        else if ( logicalBoard[1] === part ) {
            checkIfNothing(0, 1);
            gameboard.game[0][1] = oMarker;
            part.innerText = oMarker;
        }
        else if ( logicalBoard[2] === part ) {
            checkIfNothing(0, 2);
            gameboard.game[0][2] = oMarker;
            part.innerText = oMarker;
        }
        else if ( logicalBoard[3] === part ) {
            checkIfNothing(1, 0);
            gameboard.game[1][0] = oMarker;
            part.innerText = oMarker;
        }
        else if ( logicalBoard[4] === part ) {
            checkIfNothing(1, 1);
            gameboard.game[1][1] = oMarker;
            part.innerText = oMarker;
        }
        else if ( logicalBoard[5] === part ) {
            checkIfNothing(1, 2);
            gameboard.game[1][2] = oMarker;
            part.innerText = oMarker;
        }
        else if ( logicalBoard[6] === part ) {
            checkIfNothing(2, 0);
            gameboard.game[2][0] = oMarker;
            part.innerText = oMarker;
        }
        else if ( logicalBoard[7] === part ) {
            checkIfNothing(2, 1);
            gameboard.game[2][1] = oMarker;
            part.innerText = oMarker;
        }
        else if ( logicalBoard[8] === part ) {
            checkIfNothing(2, 2);
            gameboard.game[2][2] = oMarker;
            part.innerText = oMarker;
        }
    }

    function checkIfNothing(row, column) {
        if ( gameboard.game[row][column] != nothing ) {
            alert("Non puoi cambiare un marker gia messo! Adesso dovrai rimetterlo in una posizione vuota");
            winAlgorithm();
        }
    }

    function xoWin() {
        /*X*/if ( gameboard.game[0][0] == xMarker && gameboard.game[0][1] == xMarker && gameboard.game[0][2] == xMarker ) {
            console.log("X ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = xMarker;
            winShow();
        }
        else if ( gameboard.game[1][0] == xMarker && gameboard.game[1][1] == xMarker && gameboard.game[1][2] == xMarker ) {
            console.log("X ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = xMarker;
            winShow();
        }
        else if ( gameboard.game[2][0] == xMarker && gameboard.game[2][1] == xMarker && gameboard.game[2][2] == xMarker ) {
            console.log("X ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = xMarker;
            winShow();
        }// Verticale
        else if ( gameboard.game[0][0] == xMarker && gameboard.game[1][0] == xMarker && gameboard.game[2][0] == xMarker ) {
            console.log("X ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = xMarker;
            winShow();
        }
        else if ( gameboard.game[0][1] == xMarker && gameboard.game[1][1] == xMarker && gameboard.game[2][1] == xMarker ) {
            console.log("X ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = xMarker;
            winShow();
        }
        else if ( gameboard.game[0][2] == xMarker && gameboard.game[1][2] == xMarker && gameboard.game[2][2] == xMarker ) {
            console.log("X ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = xMarker;
            winShow();
        }//Diagonale
        else if ( gameboard.game[0][0] == xMarker && gameboard.game[1][1] == xMarker && gameboard.game[2][2] == xMarker ) {
            console.log("X ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = xMarker;
            winShow();
        }
        else if ( gameboard.game[0][2] == xMarker && gameboard.game[1][1] == xMarker && gameboard.game[2][0] == xMarker ) {
            console.log("X ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = xMarker;
            winShow();
        }

        /*O*/if ( gameboard.game[0][0] == oMarker && gameboard.game[0][1] == oMarker && gameboard.game[0][2] == oMarker ) {
            console.log("O ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = oMarker;
            winShow();
        }
        else if ( gameboard.game[1][0] == oMarker && gameboard.game[1][1] == oMarker && gameboard.game[1][2] == oMarker ) {
            console.log("O ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = oMarker;
            winShow();
        }
        else if ( gameboard.game[2][0] == oMarker && gameboard.game[2][1] == oMarker && gameboard.game[2][2] == oMarker ) {
            console.log("O ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = oMarker;
            winShow();
        }// Verticale
        else if ( gameboard.game[0][0] == oMarker && gameboard.game[1][0] == oMarker && gameboard.game[2][0] == oMarker ) {
            console.log("O ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = oMarker;
            winShow();
        }
        else if ( gameboard.game[0][1] == oMarker && gameboard.game[1][1] == oMarker && gameboard.game[2][1] == oMarker ) {
            console.log("O ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = oMarker;
            winShow();
        }
        else if ( gameboard.game[0][2] == oMarker && gameboard.game[1][2] == oMarker && gameboard.game[2][2] == oMarker ) {
            console.log("O ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = oMarker;
            winShow();
        }//Diagonale
        else if ( gameboard.game[0][0] == oMarker && gameboard.game[1][1] == oMarker && gameboard.game[2][2] == oMarker ) {
            console.log("O ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = oMarker;
            winShow();
        }
        else if ( gameboard.game[0][2] == oMarker && gameboard.game[1][1] == oMarker && gameboard.game[2][0] == oMarker ) {
            console.log("O ha vinto");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = oMarker;
            winShow();
        }

        else {
            checkBoard();
        }
    }
    function checkBoard() {
        if ( gameboard.game[0][0] != nothing && gameboard.game[0][1] != nothing && gameboard.game[0][2] != nothing && 
             gameboard.game[1][0] != nothing && gameboard.game[1][1] != nothing && gameboard.game[1][2] != nothing && 
             gameboard.game[2][0] != nothing && gameboard.game[2][1] != nothing && gameboard.game[2][2] != nothing ) {
            console.log("Pareggio");
            gameboard.game = [[nothing, nothing, nothing], [nothing, nothing, nothing], [nothing, nothing, nothing]];
            win = true;
            winShow0 = "pareggio";
            winShow();
        }
    }
    function winShow() {
        show.innerText = "";
        if ( winShow0 == xMarker) {
            show.innerText = "Ha vinto " + X + " (X)";
            winShow0 = "";
        }
        else if ( winShow0 == oMarker ) {
            show.innerText = "Ha vinto " + O + " (O)";
            winShow0 = "";
        }
        else if ( winShow0 == "pareggio" ) {
            show.innerText = "Pareggio";
            winShow0 = "";
        }
    }
    xoWin();
}
let show = document.createElement("div");
show.classList.add("show");
playerSelection3.appendChild(show);