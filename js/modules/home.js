import Game from './game.js';
import How from './how.js';
import { sound } from './../data/sound.js'; // created this way bc sound.js exported object

// Revealing module pattern //
const Home = (_ => {
  // Cache the DOM. Get hangman div
  const $hangman = document.querySelector('.hangman'); // $ = DOM var.

  const init = _ => {
    render();
    listeners();
  };

  const render = _ => {
    let markup = '';
    markup += `
      <h1 class="hangman__title">Hangman</h1>
      <button class="button start">New Game</button>
      <button class="button instructions">Instructions</button>
    `
    $hangman.innerHTML = markup;
  };

  const listeners = _ => {
    // using here, bc doesn't exist yet. That's why not Caching DOM above
    document.querySelector('.start').addEventListener('click', _ => {
      Game.init();
      sound.click.play();
    });
    document.querySelector('.instructions').addEventListener('click', _ => {
      How.init();
      sound.click.play();
    });
  }


   // public pointers to private functions/properties. Below exposes it:
   return {
     init
   };
})();

export default Home;