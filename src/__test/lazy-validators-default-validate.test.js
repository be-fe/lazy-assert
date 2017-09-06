var lazy = require('../index');
var utils = require('../utils');

/* global before, beforeEach, after, afterEach */
describe('Test default validate', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    beforeEach(function () {
    });
    after(function () {
    });
    afterEach(function () {
    });

    it('Should return correct validate : object', function () {
        var a = {name: 'a'};
        var b = {name: 'b', a: a};
        a.b = b;

        var c = {a: a, b: b};
        var d = {b: b, a: a};
        var e = {ta: a, tb: b, a: [a, b]}

        lazy.assertValidate('01 {a: 1}', {a: 1}, lazy.validators.summarizeTypeValidator({a: 1}));

        lazy.assertValidate('02 {a: 1, b: "123"}',
            {a: 1, b: '123'},
            lazy.validators.summarizeTypeValidator({a: 1, b: '123'})
        );

        lazy.assertValidate(
            "{a: 1, b: '123', c: [1, '2']}",
            {a: 1, b: '123', c: [1, '2']},
            lazy.validators.summarizeTypeValidator({a: 1, b: '123', c: [1, '2']})
        );

        // console.log('@@d', lazy.validators.summarizeTypeValidator(c));
        lazy.assertValidate(
            "04 looping c",
            c,
            {
                a: {b: {a: '=a', name: 'string'}, name: 'string'},
                b: '=a.b'
            }
        );

        lazy.validators.clearValidateKey(c);

        lazy.assertValidate(
            '05 looping d',
            d,
            lazy.validators.summarizeTypeValidator(d)
        );


        lazy.assertValidate('06 {a: 1, b: {c: 1, d: 1}}',
            {a: 1, b: {c: 1, d: 1}},
            lazy.validators.summarizeTypeValidator({a: 1, b: {c: 1, d: 1}})
        );

        lazy.assertValidate('07 {a: null, b: {c: 1, d: 1}, e: function}',
            {
                a: null,
                b: {c: 1, d: 1},
                e: function () {
                }
            },
            lazy.validators.summarizeTypeValidator({
                a: null,
                b: {c: 1, d: 1},
                e: function () {
                }
            })
        );

        lazy.validators.clearValidateKey(d);

        lazy.assertValidate('08 looping e',
            e,
            {
                "a": [
                    "array",
                    [
                        {
                            "b": {
                                "a": "=a.0",
                                "name": "string"
                            },
                            "name": "string"
                        },
                        "=a.0.b"
                    ]
                ],
                "ta": "=a.0",
                "tb": "=a.0.b"
            }
        );
    });

    it('Should assert successfully: array', function () {

        lazy.assertValidate(
            '01 1, "2"',
            [1, '2'],
            lazy.validators.summarizeTypeValidator([1, '2'])
        );

        lazy.assertValidate(
            '02 1, "2", {a: 1}',
            [1, '2', {a: 1}],
            lazy.validators.summarizeTypeValidator([1, '2', {a: 1}])
        );

        lazy.assertValidate(
            '03 1, "2", {a: {b: 1}}',
            [1, '2', {a: {b: 1}}],
            lazy.validators.summarizeTypeValidator([1, '2', {a: {b: 1}}])
        );

        lazy.assertValidate(
            '04 1, "2", {a: {b: {c: 1}}',
            [1, '2', {a: {b: {c: 1}}}],
            lazy.validators.summarizeTypeValidator([1, '2', {a: {b: {c: 1}}}])
        );

        lazy.assertValidate(
            '05 1, "2", {a: {b: {c: 1}}, {a: {b: 1}}',
            [1, '2', {a: {b: {c: 1}}}, {a: {b: 1}}],
            lazy.validators.summarizeTypeValidator([1, '2', {a: {b: {c: 1}}}, {a: {b: 1}}])
        );

        lazy.assertValidate(
            '06 1, "2", {a: {b: [1, "2"]}}, {a: {b: 1}}',
            [1, '2', {a: {b: [1, '2']}}, {a: {b: 1}}],
            lazy.validators.summarizeTypeValidator([1, '2', {a: {b: [1, '2']}}, {a: {b: 1}}])
        );

        lazy.assertValidate(
            '07 1, "2", {a: {b: 1}}, {a: {b: "2"}}, {a: {c: null}}',
            [1, '2', {a: {b: 1}}, {a: {b: '2'}}, {a: {c: null}}],
            lazy.validators.summarizeTypeValidator([1, '2', {a: {b: 1}}, {a: {b: '2'}}, {a: {c: null}}])
        );

        lazy.assertValidate(
            '08 1, "2", {a: [1, "2"]}, {a: {b: 1}, {a: {b: "2"}}, {a: {c: null}',
            [1, '2', {a: [1, '2']}, {a: {b: 1}}, {a: {b: '2'}}, {a: {c: null}}],
            lazy.validators.summarizeTypeValidator([1, '2', {a: [1, '2']}, {a: {b: 1}}, {a: {b: '2'}}, {a: {c: null}}])
        );

        lazy.assertValidate(
            '09 1, "2", {a: nan}, {a: [1, "2"]}, {a: {b: 1}, {a: {b: "2"}}, {a: {c: null}',
            [1, '2', {a: NaN}, {a: [1, '2']}, {a: {b: 1}}, {a: {b: '2'}}, {a: {c: null}}],
            lazy.validators.summarizeTypeValidator([1, '2', {a: NaN}, {a: [1, '2']}, {a: {b: 1}}, {a: {b: '2'}}, {a: {c: null}}])
        );

        lazy.assertValidate(
            '10 1, {a: [nan]}, {a: [1, "2"]}, {a: [{b: 1}]}, [null]',
            [1, {a: [NaN]}, {a: [1, '2']}, {a: [{b: 1}]}, [null]],
            lazy.validators.summarizeTypeValidator([1, {a: [NaN]}, {a: [1, '2']}, {a: [{b: 1}]}, [null]])
        );

        lazy.assertValidate(
            '11 {a: [nan]}, {a: [{b: 1}]}, {a: [{b: [{c: 1}, "1"]}]}',
            [{a: [NaN]}, {a: [{b: 1}]}, {a: [{b: [{c: 1}, '1']}]}],
            lazy.validators.summarizeTypeValidator([{a: [NaN]}, {a: [{b: 1}]}, {a: [{b: [{c: 1}, '1']}]}])
        );

        lazy.assertValidate(
            '12 {a : [{a: 1}], b: [{a: "1"}]}',
            {a: [{a: 1}], b: [{a: '1'}]},
            lazy.validators.summarizeTypeValidator({a: [{a: 1}], b: [{a: '1'}]})
        );

        lazy.assertValidate(
            '13 {a: [{a: 1}, {a: "1"}]}',
            {a: [{a: 1}, {a: '1'}]},
            lazy.validators.summarizeTypeValidator({a: [{a: 1}, {a: '1'}]})
        );

        lazy.assertValidate(
            '14 {a: [{a: "1"}, {a: [1, {b: 1}]}, {a: {c: 1}}, {a: [{d: 1}]}]}',
            {a: [{a: '1'}, {a: [1, {b: 1}]}, {a: {c: 1}}, {a: [{d: 1}]}]},
            lazy.validators.summarizeTypeValidator({a: [{a: '1'}, {a: [1, {b: 1}]}, {a: {c: 1}}, {a: [{d: 1}]}]})
        );
    });

    it('Should process hi complex data', function () {
        var hiMockData = require('./_mock/hi-data.mock');

        lazy.assertValidate('08-hi-complex-data',
            hiMockData,
            {
                "code": "number",
                "corpId": "number",
                "info": "string",
                "rspData": {
                    "existMore": "boolean",
                    "groupList": [
                        "array",
                        {
                            "groupInfo": {
                                "autoName": "boolean",
                                "bulletin": "string",
                                "contentFiles": [
                                    "array",
                                    {
                                        "extInfo": 'null',
                                        "fid": "null",
                                        "fileId": "null",
                                        "fileType": "null",
                                        "fileUrl": "null",
                                        "md5": "null",
                                        "name": "null",
                                        "size": "null"
                                    }
                                ],
                                "contentImages": [
                                    "array",
                                    {
                                        "extInfo": ["null", 'number'],
                                        "fid": "null",
                                        "height": "null",
                                        "imageId": "null",
                                        "imageType": "null",
                                        "md5": "null",
                                        "name": "null",
                                        "size": "null",
                                        "url": "null",
                                        "width": "null"
                                    }
                                ],
                                "corpId": "number",
                                "createTime": "string",
                                "desc": "string",
                                "digest": "null",
                                "friendlyLevel": "number",
                                "gid": "string",
                                "groupStatus": "number",
                                "groupType": "number",
                                "headMD5": "string",
                                "lastActiveTime": "string",
                                "lastUpdateTime": "string",
                                "name": "string",
                                "onlyOwnerAllowModify": "boolean",
                                "openLevel": "number",
                                "ownerCorpId": "number",
                                "ownerGid": "string",
                                "parentGid": "string",
                                "tag": "string",
                                "topicContent": "string",
                                "topicTypeExtensionId": "string",
                                "uClass1": "number",
                                "uClass2": "number",
                                "uid": "string"
                            },
                            "msgStatus": "null"
                        }
                    ],
                    "lastQueryTime": "string",
                    "msgs": [
                        "array",
                        {
                            "clientMsgID": "string",
                            "compatibleText": "null",
                            "content": {
                                "appInfo": "null",
                                "atAll": "null",
                                "ats": [
                                    "array"
                                ],
                                "datas": [
                                    "array"
                                ],
                                "extContent": [
                                    "array"
                                ],
                                "faces": [
                                    [
                                        "array"
                                    ],
                                    "string",
                                    {}
                                ],
                                "files": [
                                    "array"
                                ],
                                "images": [
                                    "array"
                                ],
                                "sysNotify": {
                                    "notifyData": {
                                        "gid": [
                                            "string",
                                            "undefined"
                                        ],
                                        "groupStatus": [
                                            "number",
                                            "undefined"
                                        ],
                                        "groupInfo": [
                                            "undefined",
                                            {
                                                "autoName": "boolean",
                                                "bulletin": "string",
                                                "contentFiles": [
                                                    "array"
                                                ],
                                                "contentImages": [
                                                    "array"
                                                ],
                                                "corpId": "number",
                                                "createTime": "string",
                                                "desc": "string",
                                                "digest": "null",
                                                "friendlyLevel": "number",
                                                "gid": "string",
                                                "groupStatus": "number",
                                                "groupType": "number",
                                                "headMD5": "string",
                                                "lastActiveTime": "string",
                                                "lastUpdateTime": "string",
                                                "name": "string",
                                                "onlyOwnerAllowModify": "boolean",
                                                "openLevel": "number",
                                                "ownerCorpId": "number",
                                                "ownerGid": "string",
                                                "parentGid": "string",
                                                "tag": "string",
                                                "topicContent": "string",
                                                "topicTypeExtensionId": "string",
                                                "uClass1": "number",
                                                "uClass2": "number",
                                                "uid": "string"
                                            }
                                        ]
                                    },
                                    "notifyId": "string",
                                    "notifyType": "number"
                                },
                                "texts": [
                                    "array"
                                ],
                                "urls": [
                                    "array"
                                ],
                                "voices": [
                                    "array"
                                ]
                            },
                            "createTime": "string",
                            "extra": "null",
                            "fromId": "string",
                            "fromName": "string",
                            "fromType": "number",
                            "isRealTime": "boolean",
                            "lastUpdateTime": "string",
                            "msgEngines": [
                                "array",
                                {
                                    "file": "null",
                                    "linear": "null",
                                    "notify": {
                                        "contentId": "string",
                                        "version": "number"
                                    },
                                    "simpleRM": "null",
                                    "voice": "null"
                                }
                            ],
                            "msgId": "string",
                            "msgTemplate": "string",
                            "notifyText": "null",
                            "options": [
                                "array"
                            ],
                            "persistLevel": "null",
                            "receivers": [
                                "array",
                                {
                                    "mainReceiver": "null",
                                    "msgSeq": "string",
                                    "previousMsgSeq": "string",
                                    "subType": "number",
                                    "toId": "string",
                                    "toType": "number"
                                }
                            ],
                            "sendTime": "string",
                            "tags": [
                                "array"
                            ],
                            "view": "string"
                        }
                    ],
                    "quitGids": [
                        "array"
                    ]
                },
                "uid": "string"
            }
        );
    });
});