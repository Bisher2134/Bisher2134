import "/src/App.css";
const EndGame = ({ newGame, player, draw, X_PLAYER, O_PLAYER }) => {
    return (
      <div className="end-game-screen">
        {!draw && (
          <div className="win-text">
            Player {player ? O_PLAYER : X_PLAYER} Win!
          </div>
        )}
        {draw && <div className="win-text">Draw</div>}
        <div className="btn">
         <button className="btn1" onClick={newGame}>
          New Game
         </button>
         <button className="btn2" onClick={newGame}>
          Cancel
         </button>
        </div>
      </div>
    );
  };
  export default EndGame;