const How = (_ => {
  // When instructions button is clicked in home.js, initialize
  const init = _ => {
    console.log("instructions initialized");
  }

  // expose it:
  return {
    init
  }
})();

export default How;