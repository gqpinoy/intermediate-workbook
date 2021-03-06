'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i])
    }
}

function generateSolution() {
    for (var i = 0; i < 4; i++) {
        var randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//add PARAMETER Solution & GUESS
function generateHint(solution, guess) {
    // your code here - Spec 2
    var solutionArray = solution.split('');
    var guessArray = guess.split('');
    var correctLetterLocations = 0;

    for (var i = 0; i < solutionArray.length; i++){
      if(solutionArray[i] === guessArray[i]){
        correctLetterLocations++;
        solutionArray[i] = null;
      }
}
  //Spec 2.3
    var correctLetters = 0;
    for (var i = 0; i < solutionArray.length; i++){
      var targetIndex = solutionArray.indexOf(guessArray[i]);
      if(targetIndex > -1){
        correctLetters++;
        //it's targetIndex!!!!!!
        solutionArray[targetIndex] = null;
      }
    }
    //Spec 2.4
    return (correctLetterLocations + '-' + correctLetters);
}




function spotColor(hint){
  var colorSplit = hint.split('-');
  return (colors.red(colorSplit[0]) + '-' + colors.white(colorSplit[1]));
}

function mastermind(guess) {
    solution = 'abcd';
    // your code here. Spec 3
    var hint = generateHint(solution, guess);
    hint = spotColor(hint);
    board.push(guess + ' ' + hint);


    if (guess === solution){
      return ('You guessed it!');
    }
    //Spec 4
    else if (board.length === 10){
      return ('You ran out of turns! The solution was ' + solution);
    }
    else {
      return ('Guess again.');
    }
}


function getPrompt() {
    prompt.get(['guess'], function (error, result) {
        console.log( mastermind(result['guess']) );
        printBoard();
        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#mastermind()', function () {
        it('should register a guess and generate hints', function () {
            solution = 'abcd';
            mastermind('aabb');
            assert.equal(board.length, 1);
        });
        it('should be able to detect a win', function () {
            assert.equal(mastermind(solution), 'You guessed it!');
        });
    });

    describe('#generateHint()', function () {
        it('should generate hints', function () {
            assert.equal(generateHint('abcd', 'abdc'), '2-2');
        });
        it('should generate hints if solution has duplicates', function () {
            assert.equal(generateHint('abcd', 'aabb'), '1-1');
        });

    });

} else {
    generateSolution();
    getPrompt();
}
