export default class GameView{
    constructor(){
        // console.log("game view")
    }
    updateBoard(game){
        this.updateTurn(game);
        const winningCombinaton=game.findWinningCombinatons();
        // console.log("this is game view");
        // console.log(game.board);
        // console.log("this is  after game view");
        for(let i=0;i<game.board.length;i++){
           const tile=document.querySelector(`.board-tile[data-index='${i}']`);
           tile.classList.remove("tile-winner")

        //    console.log(tile)
        //    tile.textContent=game.board[i];
           let tileType=game.board[i]=='X'?"tile-x":"tile-o"
           console.log(tileType);
            tile.innerHTML=`<span class="${tileType}">${game.board[i]? game.board[i]:""}</span>`


            if(winningCombinaton && winningCombinaton.includes(i)){
                tile.classList.add("tile-winner");
            }
        }
        // console.log("this is after");
    }
   updateTurn(game){
    let playerX=document.querySelector(".player-x")
    let playerO=document.querySelector(".player-o")
    playerX.classList.remove("active")
    playerO.classList.remove("active")
    // console.log(playerX);
    // console.log(playerO);
    if(game.turn=='X'){
        playerX.classList.add('active');
    }
    else{
        playerO.classList.add('active');
    }
   }


}