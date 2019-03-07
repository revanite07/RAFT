var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

describe('test RAFT login', () => {
    it('should log in without error', (done) => {
        jest.setTimeout(20000);
        nightmare
            .goto('https://raft-travel.herokuapp.com/')
            .type('#email-input', 'james.je.cho@gmail.com')
            .type('#password-input', 'test')
            .click('#login-submit')
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