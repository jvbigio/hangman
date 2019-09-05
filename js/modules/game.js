const Game = (_ => {
  // When new game button is clicked in home.js, initialize
  const init = _ => {
    console.log("game activated");
  }

  // expose it:
  return {
    init
  }
})();

export default Game;