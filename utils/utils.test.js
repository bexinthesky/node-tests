const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
        });
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
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });

});


// should verify first and last names are set
// assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
    var user = {location: 'Pirates Swoop', age: 27};
    var res = utils.setName(user, 'Rebecca Lioness');

    // expect(user).toEqual(res);
    expect(res).toInclude({
        firstName: 'Rebecca',
        lastName: 'Lioness'
    });
});

// throwing errors manually ↓↓↓
// it('should add two numbers', () => {
//     if (res !== 44) {
//         throw new Error(`Expected 44, but got ${res}.`);
//     }
// });

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