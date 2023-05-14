'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const currentScoreP1 = document.getElementById('current--0');
const currentScoreP2 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./assets/dice-${dice}.png`;

  // 3. Check for rolled 1 if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    currentScoreP1.textContent = currentScore; // Change later
  } else {
    // Switch to next player
  }
});
