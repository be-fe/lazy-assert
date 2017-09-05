var lazy = require('../index');
var utils = require('../utils');
var sinon = require('sinon');
var mockWarn = require('./_utils/mock-warn');

/* global before, beforeEach, after, afterEach */
describe('Test lazy validator warnings', function () {

    var setLogCalled;

    before(function () {
        lazy.setLocation(__filename);
        setLogCalled = mockWarn.setLogCalled(this);
        mockWarn.mockWarn(this);
    });

    beforeEach(function () {
    });
    after(function () {
        console.warn.restore();
    });
    afterEach(function () {
    });

    it('Should return correct warnings : simple cases', function () {
        var result = [];
        setLogCalled(function () {
            result.push(arguments);
        });

        lazy.validate('01 1, undefined',
            1,
            undefined
        );

        lazy.validate('02 1, "object"',
            1,
            'object'
        );

        lazy.validate('03 function, [array, number]',
            function () {
            },
            ['array', 'number']
        );

        lazy.peek('01-simple-case-warnings',
            result
        );
    });

    it('Should return correct warnings : complex cases', function () {
        var result = [];

        setLogCalled(function () {
            result.push(arguments);
        });

        var setKey = function (key) {
            result.push('-------- ' + key + ' --------')
            return key;
        };

        lazy.validate(setKey('"1", [or, {}, null]'),
            '1',
            ['or', {}, null]
        );

        lazy.validate(setKey('["1"], [or, {}, null]'),
            ['1'],
            ['or', {}, null]
        );

        lazy.validate(setKey('["1"], [array, {}, null]'),
            ['1'],
            ['array', {}, null]
        );

        lazy.validate(setKey('[{a: [{b: 1}]}], inner array validator'),
            [{
                a: [{b: 1}]
            }],
            ['array', {
                a: ['array', {b: 'string'}]
            }]
        );


        lazy.peek('02-complex-case-warnings',
            result
        );
    });
});