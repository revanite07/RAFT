var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

describe('test RAFT signup', () => {
    it('should sign up without error', (done) => {
        jest.setTimeout(30000);
        nightmare
            .goto('https://raft-travel.herokuapp.com/')
            .click('#signup')
            .type('#email-input', 'test@gmail.com')
            .type('#password-input', 'test')
            .click('#signup-submit')
            .wait(1000)
            .evaluate(function () {
                var text = document.querySelector('.main').innerHTML
                return text;
            })
            .end()
            .then(function (result) {
                console.log(result);
                expect(result).toContain("Welcome to your Life RAFT");
                done();
            })
            .catch(function (error) {
                console.error("Search failed:", error);
            });
    });
});