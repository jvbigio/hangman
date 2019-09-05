import Home from "./home.js";
import { sound } from './../data/sound.js';

const Game = (_ => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const words = ['apple', 'ball', 'dog', 'cat', 'elephant']; // hardcoding for testing
  let chosenWord, guessingWord, lives, guesses;

  // cache the DOM
  const $hangman = document.querySelector('.hangman');

  // When new game button is clicked in home.js, initialize
  const init = _ => {
    // 1. choose a word
    chosenWord = chooseWord();
    // 2. Build out our guessing word to render
    guessingWord = Array(chosenWord.length).fill('_'); // creates the ---- for chosenWord
    guesses = [];
    lives = 7;
    // show initial screen or page
    showInitPage();
    listeners();
  }

  const listeners = _ => {
    // add letters and main menu event listener
    $hangman.addEventListener('click', event => {
      if (event.target.matches('.hangman__letter')) {
        sound.click.play();
        check(event.target.innerHTML);
      }
      if (event.target.matches('.hangman__trigger')) { // main menu
        sound.click.play();
        Home.init(); // go back to home
      }
    })
  }

  const isAlreadyTaken = letter => {
    return guesses.includes(letter);
  }

  const check = guess => {
    // when we click on something make sure it's not taken already
    // by pushing it to the guesses array and then checking it
    if (isAlreadyTaken(guess)) return;
    guesses.push(guess);
    // check if the guess exists in the chosenWord
  }

  const showInitPage = _ => {
    let markup = `
      <p class="hangman__stats">Lives:
        <span class="hangman__lives">${lives}</span>
      </p>
      <h1 class="hangman__title">Hangman</h1>
      <canvas class="hangman__board" height="155px"></canvas>
      <div class="hangman__word">${guessingWord.join('')}</div>
      <p class="hangman__instructions">Pick a letter below to guess the whole word.</p>
      <ul class="hangman__letters">
        ${createLetters()}
      </ul>
      <button class="button hangman__trigger">Main Menu</button>
      `
    $hangman.innerHTML = markup;
  }

  // create letters dynamically. creating a bunch of li tags and
  // return as a string on line 31  ${createLetters()}
  const createLetters = _ => {
    let markup = ``;
    letters.forEach(letter  => {
      markup += `
        <li class="hangman__letter">${letter}</li>
      `
    })
    return markup;
  }


  const chooseWord = _ => {
    let randNum = Math.floor(Math.random() * words.length);
    return words[randNum];
  }

  // expose it:
  return {
    init
  }
})();

export default Game;

// 1. Make computer choose a random word chosenWord = chooseWord(); // ex: apple
// apple chosenWord
// -pp-- guessingWord
// The <canvas> tag is used to draw graphics, on the fly, via scripting (usually JavaScript).
// .join convert array to string
