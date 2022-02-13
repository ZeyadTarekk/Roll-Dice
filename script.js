"use strict";

// Main elements we will need
const player1CurrentScoreEl = document.getElementById("current--0");
const player2CurrentScoreEl = document.getElementById("current--1");

const player1ScoreEl = document.getElementById("score--0");
const player2ScoreEl = document.getElementById("score--1");

const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

// Starting game logic
player1ScoreEl.textContent = 0;
player2ScoreEl.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", rollingDice);

// the total scores
const scores = [0, 0];

// Rolling dice function
function rollingDice() {
  // Generate random number
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  console.log(randomNumber);

  diceEl.src = `dice-${randomNumber}.png`;
  if (diceEl.classList.contains("hidden")) diceEl.classList.remove("hidden");

  // Check if the number is 1
  if (randomNumber === 1) {
    // Check which player is playing now then make his score to 0 and switch the players
    if (
      document.querySelector(".player--0").classList.contains("player--active")
    ) {
      player1CurrentScoreEl.textContent = 0;
      document.querySelector(".player--0").classList.remove("player--active");
      document.querySelector(".player--1").classList.add("player--active");
    } else {
      player2CurrentScoreEl.textContent = 0;
      document.querySelector(".player--1").classList.remove("player--active");
      document.querySelector(".player--0").classList.add("player--active");
    }
  } else {
    // Check which player is playing now
    if (
      document.querySelector(".player--0").classList.contains("player--active")
    )
      player1CurrentScoreEl.textContent =
        Number(player1CurrentScoreEl.textContent) + randomNumber;
    else
      player2CurrentScoreEl.textContent =
        Number(player2CurrentScoreEl.textContent) + randomNumber;
  }
}
