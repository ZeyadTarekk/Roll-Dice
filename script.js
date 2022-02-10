'use strict';

// Main elements we will need
const player1CurrentScoreEl = document.getElementById("current--0");
const player2CurrentScoreEl = document.getElementById("current--1");

const player1ScoreEl = document.getElementById("score--0");
const player2ScoreEl = document.getElementById("score--1");

const diceEl = document.querySelector('.dice');

// Starting game logic
player1ScoreEl.textContent = 0;
player2ScoreEl.textContent = 0;
diceEl.classList.add('hidden');
