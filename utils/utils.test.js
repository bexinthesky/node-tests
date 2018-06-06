const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    
    expect(res).toBe(44).toBeA('number');
    // using expect instead of throwing errors manually ↓↓↓
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var square = utils.square(9);

    expect(square).toBe(81).toBeA('number');
    // using expect instead of throwing errors manually ↓↓↓
    // if (square !== 81) {
    //     throw new Error(`Expected 81, but got ${square}.`);
    // }
});

it('should async square a number', (done) => {
    utils.asyncSquare(5, (res) => {
        expect(res).toBe(25).toBeA('number');
        done();
    });
});

it('should set firstName and lastName', () => {
    var user = {location: 'Pirates Swoop', age: 27};
    var res = utils.setName(user, 'Rebecca Lioness');

    // expect(user).toEqual(res);
    expect(res).toInclude({
        firstName: 'Rebecca',
        lastName: 'Lioness'
    });
});

// playing with expect assertions ↓↓↓
// it('should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'rebecca'}).toNotEqual({name: 'Rebecca'});
//     // expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Rebecca',
//         age: 27,
//         location: 'place'
//     }).toExclude({
//         age: 23
//     })
// });