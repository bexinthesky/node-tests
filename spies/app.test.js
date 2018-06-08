const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Usagi', 21);
        expect(spy).toHaveBeenCalledWith('Usagi', 21);
    });

    it('should call saveUser with user object', () => {
        var email = 'usagi@example.com';
        var password = '123ABC';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});