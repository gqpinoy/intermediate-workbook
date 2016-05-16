'use strict';

var assert = require('assert');

function whichSpecies(character) {
  if ((character) === 'scooby'){
    return 'dog';
  }
  else if((character)=== 'garfield'){
    return 'cat';
  }
  else if((character) === 'nemo'){
    return 'fish';
  }
  else{
    return false;
  }


    // should return "dog" when character is 'scooby'
    // should return "cat" when character is 'garfield'
    // should return "fish" when character is 'nemo'
    // should return false if character is anything else

}

function isEven(number) {
    if(number %2 === 0){
      return true;
    }
    else{
      return false;
    }
    // should return true is number is even (divisible by 2)

}


// Tests

describe('#whichSpecies()', function () {
    it('should return "dog" when character is scooby', function () {
        assert.equal(whichSpecies('scooby'), 'dog');
    });
    it('should return "cat" when character is garfield', function () {
        assert.equal(whichSpecies('garfield'), 'cat');
    });
    it('should return "fish" when character is nemo', function () {
        assert.equal(whichSpecies('nemo'), 'fish');
    });
    it('should return false if character is anything else', function () {
        assert.equal(whichSpecies('stitch'), false);
    });
});

describe('#isEven()', function () {
    it('should return true is number is even (divisible by 2)', function () {
        assert.equal(isEven(4), true);
    });
    it('should return false when number is not even', function () {
        assert.equal(isEven(5), false);
    });
});
