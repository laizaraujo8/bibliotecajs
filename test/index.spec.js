var chai = require('chai');
var expect = chai.expect;
var valid = require('../lib/index.js');

describe('cpfValidator lib', () => {
        it('resto igual a primeiro dígito', () => {
        expect(valid.cpfValidator([9])).to.equal('true');
        });


});

