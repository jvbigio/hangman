const Board = (_ => {
  let livesLeft = null;

  const setLives = newLives => {
    livesLeft = newLives;
  }
  return { // expose setLives
    setLives
  }
})();

export default Board;