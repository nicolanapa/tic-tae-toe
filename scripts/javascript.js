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

function winAlgorithm() {
    gameboard;
    let playerDecision = prompt("Scegliere se sei X o O", "X");
    
    if ( playerDecision == "X" ) {
        xPlayer();
    }
    else {
        oPlayer();
    }

    function xPlayer() {
        let placementRow = prompt("Scegli la riga (1, 2, 3)", 1);
        placementRow = Number(placementRow);
        let placement = prompt("Scegli la posizione (1, 2, 3)", 1);
        placement = Number(placement);
        checkIfNothing(placementRow, placement);
        if ( placementRow === 1 ) {
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
        }
    }

    function oPlayer() {
        let placementRow = prompt("Scegli la riga (1, 2, 3)", "1");
        placementRow = Number(placementRow);
        let placement = prompt("Scegli la posizione (1, 2, 3)", "1");
        placement = Number(placement);
        checkIfNothing(placementRow, placement);
        if ( placementRow === 1 ) {
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
        }
    }

    function checkIfNothing(row, column) {
        if ( gameboard.game[(row - 1)][(column - 1)] != nothing ) {
            alert("Non puoi cambiare un marker gia messo! Adesso dovrai rimetterlo in una posizione vuota");
            winAlgorithm();
        }
    }

    function xoWin() {
        if ( gameboard.game[0][0] == xMarker && gameboard.game[0][1] == xMarker && gameboard.game[0][2] == xMarker ) {
            console.log("X ha vinto");
        }
        else if ( gameboard.game[1][0] == xMarker && gameboard.game[1][1] == xMarker && gameboard.game[1][2] == xMarker ) {
            console.log("X ha vinto");
        }
        else if ( gameboard.game[2][0] == xMarker && gameboard.game[2][1] == xMarker && gameboard.game[2][2] == xMarker ) {
            console.log("X ha vinto");
        }
        else if ( gameboard.game[0][0] == oMarker && gameboard.game[0][1] == oMarker && gameboard.game[0][2] == oMarker ) {
            console.log("O ha vinto");
        }
        else if ( gameboard.game[1][0] == oMarker && gameboard.game[1][1] == oMarker && gameboard.game[1][2] == oMarker ) {
            console.log("O ha vinto");
        }
        else if ( gameboard.game[2][0] == oMarker && gameboard.game[2][1] == oMarker && gameboard.game[2][2] == oMarker ) {
            console.log("O ha vinto");
        }
        else {
            //console.log("Pareggio");
            checkBoard();
        }
    }
    function checkBoard() {
        if ( gameboard.game[0][0] != nothing && gameboard.game[0][1] != nothing && gameboard.game[0][2] != nothing && 
             gameboard.game[1][0] != nothing && gameboard.game[1][1] != nothing && gameboard.game[1][2] != nothing && 
             gameboard.game[2][0] != nothing && gameboard.game[2][1] != nothing && gameboard.game[2][2] != nothing ) {
            console.log("Pareggio");
        }
    }
    //checkBoard();
    xoWin();
}