var assert = require('assert');
var checkDomain = require('../index');

describe('checkDomain', function () {
    describe('usage', function () {
        it('require(this-module) returns a function', function () {
            assert(typeof checkDomain === 'function', 'checkDomain should be a function')
        });
    })
});
