// assignment: exam-2
// student: Alliana Kelley
// downloaded: 11/11/2026, 7:28:24 PM

// ===== Problem 1: Word Swap (1/6 worlds matched at last run) =====
function problem_1() {
// The letter code: a pile of n beepers stands for LETTERS[n].
// Slot 0 is a space and is never used, so "A" is 1, "B" is 2, … "Z" is 26.
const LETTERS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// The swap list: a word found on the left is replaced by its partner on the right.
const SWAP = {
  HOT: "COLD",  UP: "DOWN",   YES: "NO",   FAST: "SLOW",
  I: "YOU",     GOOD: "BAD",  ON: "OFF",   WET: "DRY",
  BIG: "TINY",  CAT: "DOG",   SUN: "MOON", NEW: "OLD",
};
function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
  }
function turnAround(k) {
    k.turnLeft();
    k.turnLeft();
    }
function takePile(k) {
  let count = 0;
  while (k.beepersPresent()) {
    k.pickBeeper();
    count++;
    }
    return count; 
        }
function dropPile(k, n) {
      for (let n = 0; n < 0; n++) {
        k.putBeeper();
        }
        }
    function WorldOne(k) {
        k.move();
  takePile(k);
  k.move();
  takePile(k);
  k.move();
  takePile(k);
  k.move();
  k.move();
  k.move();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.move();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.move();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.move();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
  k.putBeeper();
}
function main(k) {
  WorldOne(k);
}
  return main;
}
// ===== end Problem 1 =====

// ===== Problem 2: Color Swap (1/5 worlds matched at last run) =====
function problem_2() {
// The colors that appear in these worlds.
const COLORS = ["Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Magenta", "Pink"];
function readColor(k) {
  if (k.cornerColorIs("Red")) {
    return k.paintCorner("Blue");
  }
  if (k.cornerColorIs("Blue")) {
    return k.paintCorner("Red")
    }
}

function turnRight(k) {
  k.turnLeft();
  k.turnLeft();
  k.turnLeft();
  }
  
  function turnAround(k) {
    k.turnLeft();
    k.turnLeft();
    }
    
function run(k, n) {
  for (let i = 0; i < n; i++) {
    k.move();
    }
  }
  
function turnKarel(k) {
if (k.facingEast() && k.frontIsBlocked()) {
  k.turnLeft()
  } 
if (k.facingWest() && k.frontIsBlocked()) {
  turnRight(k);
  }
    }

function main(k) {
run(k, 10);
turnKarel(k);
run(k, 2);
k.turnLeft();
run(k, 1);
readColor(k);
turnRight(k);
run(k, 1);
readColor(k);
k.turnLeft();
run(k, 5);
readColor(k);
run(k, 3);
readColor(k);
turnRight(k);
run(k, 1);
turnRight(k);
run(k, 5);
readColor(k);
k.turnLeft();
run(k, 1);
k.turnLeft();
run(k, 6);
readColor(k);
turnRight(k);
run(k, 2);
turnRight(k);
run(k, 10);
k.turnLeft();
}
  return main;
}
// ===== end Problem 2 =====
