import Game from "./Game.js";
import GameView from "./GameView.js";
let game=new Game();
let gameview=new GameView();

document.querySelector(".restart").addEventListener("click",()=>{
    // console.log("new game");
    onRestartClick();
})
let tiles=document.querySelectorAll(".board-tile");
// console.log(tiles)

tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
      
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    // make a move 
    game.makeMove(i);
    //    change turn 
    gameview.updateBoard(game)
   
}
function onRestartClick(){
    game=new Game();
    gameview.updateBoard(game);
}
gameview.updateBoard(game);

// gameview.updateBoard(game);

// console.log(game.board);

// console.log("my turn is",game.turn);
// game.nextTurn();
// console.log("my turn is",game.turn);
// game.makeMove(3);
// console.log(game.board)
// game.nextTurn();
// game.makeMove(7);
// console.log(game.board)
// gameview.updateBoard(game);