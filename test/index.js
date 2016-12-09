var assert = require('assert');
var addFn = require('../index');

describe('addFn', function () {
    describe('usage', function () {
        it('require(this-module) returns a function', function () {
            assert(typeof addFn === 'function', 'addFn should be a function')
        });
        it('addFn(number) returns a function', function () {
            var add30 = addFn(30);
            assert(typeof add30 === 'function',
                'addFn(number) should be a function')
        });

        it('addFn(x)(y) === x + y', function () {
            assert(addFn(30)(50) === 80,
                'addFn(x)(y) should strictly equal to x + y')
        });
    })
});
