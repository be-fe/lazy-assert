var lazy = require('../index');
var utils = require('../utils');

/* global before, beforeEach, after, afterEach */
describe('Test summarizing', function() {
    before(function() {
        lazy.setLocation(__filename);
    });

    beforeEach(function() {});
    after(function() {});
    afterEach(function() {});

    it('Should return correct-summary : simple', function () {
        lazy.peek('05-summary-simple', {
            '01 "123"': lazy.validators.summarizeTypeValidator('123'),
            '02 123': lazy.validators.summarizeTypeValidator(123),
            '03 nan': lazy.validators.summarizeTypeValidator(+'asdf'),
            '04 infinity': lazy.validators.summarizeTypeValidator(Infinity),
            '05 -infinity': lazy.validators.summarizeTypeValidator(-Infinity),
            '06 true': lazy.validators.summarizeTypeValidator(true),
            '07 null': lazy.validators.summarizeTypeValidator(null),
            '08 undefined': lazy.validators.summarizeTypeValidator(undefined),
            '09 function': lazy.validators.summarizeTypeValidator(function () {
            }),
            '10 regexp': lazy.validators.summarizeTypeValidator(/abc/),
        }, -1);
    });

    it('Should return correct summary : object', function () {
        var a = {name: 'a'};
        var b = {name: 'b', a: a};
        a.b = b;

        var c = {a: a, b: b};
        var d = {b: b, a: a};
        var e = {ta: a, tb: b, a: [a, b]}

        var result = {
            '01 {a: 1}': lazy.validators.summarizeTypeValidator({a: 1}),
            '02 {a: 1, b: "123"}': lazy.validators.summarizeTypeValidator({a: 1, b: '123'}),
            '03 {a: 1, b: "123", c: [1, "2"]}': lazy.validators.summarizeTypeValidator({a: 1, b: '123', c: [1, '2']}),
            '04 looping c': lazy.validators.summarizeTypeValidator(c),
            '05 nested function': lazy.validators.summarizeTypeValidator({a: function() {}, b: [1, function() {}]})
        };

        lazy.validators.clearValidateKey(c);

        utils.extend(result, {
            '05 looping d': lazy.validators.summarizeTypeValidator(d),
            '06 {a: 1, b: {c: 1, d: 1}}': lazy.validators.summarizeTypeValidator({a: 1, b: {c: 1, d: 1}}),
            '07 {a: null, b: {c: 1, d: 1}, e: function}': lazy.validators.summarizeTypeValidator({
                a: null,
                b: {c: 1, d: 1},
                e: function () {
                }
            }),
        });

        lazy.validators.clearValidateKey(d);

        utils.extend(result, {
            '08 looping e': lazy.validators.summarizeTypeValidator(e)
        });

        lazy.peek('06-summary-object', result, -1);
    });

    it('Should return correct pre summary : array', function () {
        var result = {
            '01 1, "2"': lazy.validators.summarizeTypeValidator([1, '2']),
            '02 1, "2", {a: 1}': lazy.validators.summarizeTypeValidator([1, '2', {a: 1}]),
            '03 1, "2", {a: {b: 1}}': lazy.validators.summarizeTypeValidator([1, '2', {a: {b: 1}}]),
            '04 1, "2", {a: {b: {c: 1}}': lazy.validators.summarizeTypeValidator([1, '2', {a: {b: {c: 1}}}]),
            '05 1, "2", {a: {b: {c: 1}}, {a: {b: 1}}': lazy.validators.summarizeTypeValidator([1, '2', {a: {b: {c: 1}}}, {a: {b: 1}}]),
            '06 1, "2", {a: {b: [1, "2"]}}, {a: {b: 1}}': lazy.validators.summarizeTypeValidator([1, '2', {a: {b: [1, '2']}}, {a: {b: 1}}]),
            '07 1, "2", {a: {b: 1}}, {a: {b: "2"}}, {a: {c: null}}': lazy.validators.summarizeTypeValidator([1, '2', {a: {b: 1}}, {a: {b: '2'}}, {a: {c: null}}]),
            '08 1, "2", {a: [1, "2"]}, {a: {b: 1}, {a: {b: "2"}}, {a: {c: null}': lazy.validators.summarizeTypeValidator([1, '2', {a: [1, '2']}, {a: {b: 1}}, {a: {b: '2'}}, {a: {c: null}}]),
            '09 1, "2", {a: nan}, {a: [1, "2"]}, {a: {b: 1}, {a: {b: "2"}}, {a: {c: null}': lazy.validators.summarizeTypeValidator([1, '2', {a: NaN}, {a: [1, '2']}, {a: {b: 1}}, {a: {b: '2'}}, {a: {c: null}}]),
            '10 1, {a: [nan]}, {a: [1, "2"]}, {a: [{b: 1}]}, [null]': lazy.validators.summarizeTypeValidator([1, {a: [NaN]}, {a: [1, '2']}, {a: [{b: 1}]}, [null]]),
            '11 {a: [nan]}, {a: [{b: 1}]}, {a: [{b: [{c: 1}, "1"]}]}': lazy.validators.summarizeTypeValidator([{a: [NaN]}, {a: [{b: 1}]}, {a: [{b: [{c: 1}, '1']}]}]),
            '12 {a : [{a: 1}], b: [{a: "1"}]}': lazy.validators.summarizeTypeValidator({a: [{a: 1}], b: [{a: '1'}]}),
            '13 {a: [{a: 1}, {a: "1"}]}': lazy.validators.summarizeTypeValidator({a: [{a: 1}, {a: '1'}]}),
            '14 {a: [{a: "1"}, {a: [1, {b: 1}]}, {a: {c: 1}}, {a: [{d: 1}]}]}': lazy.validators.summarizeTypeValidator({a: [{a: '1'}, {a: [1, {b: 1}]}, {a: {c: 1}}, {a: [{d: 1}]}]}),
        };

        lazy.peek('07-summary-array', result, -1);
    });

    it('Should process hi complex data', function() {
        lazy.peek('08-hi-complex-data', lazy.validators.summarizeTypeValidator(require('./_mock/hi-data.mock')), -1);
    });

    it('Should process hi complex data 2', function () {

        lazy.assertValidate('08-hi-complex-data-2-assert',
            require('./_mock/hi-data-2.mock'),
            [
                "array",
                {
                    "atall": "null",
                    "atme": "null",
                    "chatId": "string",
                    "chatType": "number",
                    "lastActiveTime": "string",
                    "lastMessages": [
                        "array"
                    ],
                    "lastReadMsgId": "string",
                    "lastReadMsgSeq": "string",
                    "lastRecvMsgId": "string",
                    "lastRecvMsgSeq": "string",
                    "name": "string",
                    "subType": "number",
                    "unreadCount": "number"
                }
            ]
        );

        lazy.peek('08-hi-complex-data-2', lazy.validators.summarizeTypeValidator(require('./_mock/hi-data-2.mock')), -1);
    });
});