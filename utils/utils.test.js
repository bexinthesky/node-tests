const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    
    if (res !== 44) {
        throw new Error(`Expected 44, but got ${res}.`);
    }
});

it('should square a number', () => {
    var square = utils.square(9);

    if (square !== 81) {
        throw new Error(`Expected 81, but got ${square}.`);
    }
});