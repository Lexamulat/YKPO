var { simple, compile } = require('../index');
var expect = require('chai').expect;


describe('#compile()', function () {

    it('-64', function () {
        expect(compile('1+(4+9)*-(6+(-1))')).to.equal(-64)
    })


    it('zero call', function () {
        expect(compile('0')).to.equal(0)
    })

})