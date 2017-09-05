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
        lazy.peek('08-hi-complex-data', lazy.validators.summarizeTypeValidator({"uid": "40000999",
            "corpId": 1,
            "rspData": {
                "lastQueryTime": "1504195800175",
                "groupList": [
                    {
                        "groupInfo": {
                            "gid": "2100000100",
                            "headMD5": "",
                            "desc": "",
                            "bulletin": "",
                            "name": "imrd_304",
                            "tag": "",
                            "uClass1": 0,
                            "uClass2": 0,
                            "corpId": 1,
                            "friendlyLevel": 3,
                            "openLevel": 1,
                            "createTime": "1497443415631",
                            "ownerCorpId": 1,
                            "groupType": 2,
                            "parentGid": "0",
                            "autoName": false,
                            "lastUpdateTime": "1503581931904",
                            "ownerGid": "0",
                            "topicContent": "",
                            "digest": null,
                            "uid": "0",
                            "topicTypeExtensionId": "",
                            "groupStatus": 2,
                            "contentFiles": [
                                {
                                    "fileId": null,
                                    "md5": null,
                                    "size": null,
                                    "fileUrl": null,
                                    "name": null,
                                    "extInfo": null,
                                    "fileType": null,
                                    "fid": null
                                }
                            ],
                            "contentImages": [
                                {
                                    "imageId": null,
                                    "md5": null,
                                    "size": null,
                                    "width": null,
                                    "height": null,
                                    "url": null,
                                    "extInfo": null,
                                    "imageType": null,
                                    "name": null,
                                    "fid": null
                                }
                            ],
                            "onlyOwnerAllowModify": false,
                            "lastActiveTime": "0"
                        },
                        "msgStatus": null
                    },
                    {
                        "groupInfo": {
                            "gid": "2100000357",
                            "headMD5": "",
                            "desc": "",
                            "bulletin": "",
                            "name": "swr test",
                            "tag": "",
                            "uClass1": 0,
                            "uClass2": 0,
                            "corpId": 1,
                            "friendlyLevel": 1,
                            "openLevel": 1,
                            "createTime": "1504188516229",
                            "ownerCorpId": 1,
                            "groupType": 2,
                            "parentGid": "0",
                            "autoName": false,
                            "lastUpdateTime": "1504188516229",
                            "ownerGid": "0",
                            "topicContent": "swr create topicContent",
                            "digest": null,
                            "uid": "40000355",
                            "topicTypeExtensionId": "",
                            "groupStatus": 1,
                            "contentFiles": [
                                {
                                    "fileId": null,
                                    "md5": null,
                                    "size": null,
                                    "fileUrl": null,
                                    "name": null,
                                    "extInfo": null,
                                    "fileType": null,
                                    "fid": null
                                }
                            ],
                            "contentImages": [
                                {
                                    "imageId": null,
                                    "md5": null,
                                    "size": null,
                                    "width": null,
                                    "height": null,
                                    "url": null,
                                    "extInfo": null,
                                    "imageType": null,
                                    "name": null,
                                    "fid": null
                                }
                            ],
                            "onlyOwnerAllowModify": false,
                            "lastActiveTime": "0"
                        },
                        "msgStatus": null
                    },
                    {
                        "groupInfo": {
                            "gid": "2100000358",
                            "headMD5": "",
                            "desc": "",
                            "bulletin": "",
                            "name": "swr test",
                            "tag": "",
                            "uClass1": 0,
                            "uClass2": 0,
                            "corpId": 1,
                            "friendlyLevel": 1,
                            "openLevel": 1,
                            "createTime": "1504188826565",
                            "ownerCorpId": 1,
                            "groupType": 2,
                            "parentGid": "0",
                            "autoName": false,
                            "lastUpdateTime": "1504188826565",
                            "ownerGid": "0",
                            "topicContent": "swr create topicContent",
                            "digest": null,
                            "uid": "40000355",
                            "topicTypeExtensionId": "",
                            "groupStatus": 1,
                            "contentFiles": [
                                {
                                    "fileId": null,
                                    "md5": null,
                                    "size": null,
                                    "fileUrl": null,
                                    "name": null,
                                    "extInfo": null,
                                    "fileType": null,
                                    "fid": null
                                }
                            ],
                            "contentImages": [
                                {
                                    "imageId": null,
                                    "md5": null,
                                    "size": null,
                                    "width": null,
                                    "height": null,
                                    "url": null,
                                    "extInfo": null,
                                    "imageType": null,
                                    "name": null,
                                    "fid": null
                                }
                            ],
                            "onlyOwnerAllowModify": false,
                            "lastActiveTime": "0"
                        },
                        "msgStatus": null
                    },
                    {
                        "groupInfo": {
                            "gid": "2100000359",
                            "headMD5": "",
                            "desc": "",
                            "bulletin": "",
                            "name": "swr test",
                            "tag": "",
                            "uClass1": 0,
                            "uClass2": 0,
                            "corpId": 1,
                            "friendlyLevel": 1,
                            "openLevel": 1,
                            "createTime": "1504189196589",
                            "ownerCorpId": 1,
                            "groupType": 2,
                            "parentGid": "0",
                            "autoName": false,
                            "lastUpdateTime": "1504189196589",
                            "ownerGid": "0",
                            "topicContent": "swr create topicContent",
                            "digest": null,
                            "uid": "40000355",
                            "topicTypeExtensionId": "",
                            "groupStatus": 1,
                            "contentFiles": [
                                {
                                    "fileId": null,
                                    "md5": null,
                                    "size": null,
                                    "fileUrl": null,
                                    "name": null,
                                    "extInfo": null,
                                    "fileType": null,
                                    "fid": null
                                }
                            ],
                            "contentImages": [
                                {
                                    "imageId": null,
                                    "md5": null,
                                    "size": null,
                                    "width": null,
                                    "height": null,
                                    "url": null,
                                    "extInfo": null,
                                    "imageType": null,
                                    "name": null,
                                    "fid": null
                                }
                            ],
                            "onlyOwnerAllowModify": false,
                            "lastActiveTime": "0"
                        },
                        "msgStatus": null
                    },
                    {
                        "groupInfo": {
                            "gid": "2100000360",
                            "headMD5": "",
                            "desc": "",
                            "bulletin": "",
                            "name": "swr test",
                            "tag": "",
                            "uClass1": 0,
                            "uClass2": 0,
                            "corpId": 1,
                            "friendlyLevel": 1,
                            "openLevel": 1,
                            "createTime": "1504195125008",
                            "ownerCorpId": 1,
                            "groupType": 2,
                            "parentGid": "0",
                            "autoName": false,
                            "lastUpdateTime": "1504195125008",
                            "ownerGid": "0",
                            "topicContent": "swr create topicContent",
                            "digest": null,
                            "uid": "40000355",
                            "topicTypeExtensionId": "",
                            "groupStatus": 1,
                            "contentFiles": [
                                {
                                    "fileId": null,
                                    "md5": null,
                                    "size": null,
                                    "fileUrl": null,
                                    "name": null,
                                    "extInfo": null,
                                    "fileType": null,
                                    "fid": null
                                }
                            ],
                            "contentImages": [
                                {
                                    "imageId": null,
                                    "md5": null,
                                    "size": null,
                                    "width": null,
                                    "height": null,
                                    "url": null,
                                    "extInfo": null,
                                    "imageType": null,
                                    "name": null,
                                    "fid": null
                                }
                            ],
                            "onlyOwnerAllowModify": false,
                            "lastActiveTime": "0"
                        },
                        "msgStatus": null
                    },
                    {
                        "groupInfo": {
                            "gid": "2100000361",
                            "headMD5": "",
                            "desc": "",
                            "bulletin": "",
                            "name": "swr test",
                            "tag": "",
                            "uClass1": 0,
                            "uClass2": 0,
                            "corpId": 1,
                            "friendlyLevel": 1,
                            "openLevel": 1,
                            "createTime": "1504195627629",
                            "ownerCorpId": 1,
                            "groupType": 2,
                            "parentGid": "0",
                            "autoName": false,
                            "lastUpdateTime": "1504195627629",
                            "ownerGid": "0",
                            "topicContent": "swr create topicContent",
                            "digest": null,
                            "uid": "40000355",
                            "topicTypeExtensionId": "",
                            "groupStatus": 1,
                            "contentFiles": [
                                {
                                    "fileId": null,
                                    "md5": null,
                                    "size": null,
                                    "fileUrl": null,
                                    "name": null,
                                    "extInfo": null,
                                    "fileType": null,
                                    "fid": null
                                }
                            ],
                            "contentImages": [
                                {
                                    "imageId": null,
                                    "md5": null,
                                    "size": null,
                                    "width": null,
                                    "height": null,
                                    "url": null,
                                    "extInfo": null,
                                    "imageType": null,
                                    "name": null,
                                    "fid": null
                                }
                            ],
                            "onlyOwnerAllowModify": false,
                            "lastActiveTime": "0"
                        },
                        "msgStatus": null
                    },
                    {
                        "groupInfo": {
                            "gid": "2100000362",
                            "headMD5": "",
                            "desc": "",
                            "bulletin": "",
                            "name": "swr test",
                            "tag": "",
                            "uClass1": 0,
                            "uClass2": 0,
                            "corpId": 1,
                            "friendlyLevel": 1,
                            "openLevel": 1,
                            "createTime": "1504195800165",
                            "ownerCorpId": 1,
                            "groupType": 2,
                            "parentGid": "0",
                            "autoName": false,
                            "lastUpdateTime": "1504195800165",
                            "ownerGid": "0",
                            "topicContent": "swr create topicContent",
                            "digest": null,
                            "uid": "40000355",
                            "topicTypeExtensionId": "",
                            "groupStatus": 1,
                            "contentFiles": [
                                {
                                    "fileId": null,
                                    "md5": null,
                                    "size": null,
                                    "fileUrl": null,
                                    "name": null,
                                    "extInfo": null,
                                    "fileType": null,
                                    "fid": null
                                }
                            ],
                            "contentImages": [
                                {
                                    "imageId": null,
                                    "md5": null,
                                    "size": null,
                                    "width": null,
                                    "height": null,
                                    "url": null,
                                    "extInfo": null,
                                    "imageType": null,
                                    "name": null,
                                    "fid": null
                                }
                            ],
                            "onlyOwnerAllowModify": false,
                            "lastActiveTime": "0"
                        },
                        "msgStatus": null
                    }
                ],
                "msgs": [
                    {
                        "fromId": "0",
                        "fromName": "HI",
                        "receivers": [
                            {
                                "toType": 4,
                                "toId": "2100000100",
                                "msgSeq": "8",
                                "previousMsgSeq": "0",
                                "mainReceiver": null,
                                "subType": 2
                            }
                        ],
                        "content": {
                            "images": [],
                            "voices": [],
                            "files": [],
                            "texts": [],
                            "urls": [],
                            "datas": [],
                            "ats": [],
                            "sysNotify": {
                                "notifyType": 19,
                                "notifyData": {
                                    "gid": "2100000100",
                                    "groupStatus": 2
                                },
                                "notifyId": "N"
                            },
                            "extContent": [],
                            "atAll": null,
                            "appInfo": null,
                            "faces": []
                        },
                        "view": "",
                        "createTime": "1503581932157",
                        "sendTime": "1503581932154",
                        "isRealTime": false,
                        "options": [],
                        "msgTemplate": "SVR_NOTIFY",
                        "clientMsgID": "0",
                        "notifyText": null,
                        "compatibleText": null,
                        "extra": null,
                        "msgId": "1576619928093903187",
                        "tags": [],
                        "lastUpdateTime": "1503581932154",
                        "fromType": 2,
                        "persistLevel": null,
                        "msgEngines": [
                            {
                                "linear": null,
                                "simpleRM": null,
                                "file": null,
                                "voice": null,
                                "notify": {
                                    "version": 1,
                                    "contentId": "N"
                                }
                            }
                        ]
                    },
                    {
                        "fromId": "0",
                        "fromName": "HI",
                        "receivers": [
                            {
                                "toType": 4,
                                "toId": "2100000357",
                                "msgSeq": "1",
                                "previousMsgSeq": "0",
                                "mainReceiver": null,
                                "subType": 2
                            }
                        ],
                        "content": {
                            "images": [],
                            "voices": [],
                            "files": [],
                            "texts": [],
                            "urls": [],
                            "datas": [],
                            "ats": [],
                            "sysNotify": {
                                "notifyType": 4,
                                "notifyData": {
                                    "groupInfo": {
                                        "gid": "2100000357",
                                        "headMD5": "",
                                        "desc": "",
                                        "bulletin": "",
                                        "name": "swr test",
                                        "tag": "",
                                        "uClass1": 0,
                                        "uClass2": 0,
                                        "corpId": 1,
                                        "friendlyLevel": 1,
                                        "openLevel": 1,
                                        "createTime": "1504188516229",
                                        "ownerCorpId": 1,
                                        "groupType": 2,
                                        "parentGid": "0",
                                        "autoName": false,
                                        "lastUpdateTime": "1504188516229",
                                        "ownerGid": "0",
                                        "topicContent": "swr create topicContent",
                                        "digest": null,
                                        "uid": "40000355",
                                        "topicTypeExtensionId": "",
                                        "groupStatus": 1,
                                        "contentFiles": [],
                                        "contentImages": [],
                                        "onlyOwnerAllowModify": false,
                                        "lastActiveTime": "0"
                                    }
                                },
                                "notifyId": "N"
                            },
                            "extContent": [],
                            "atAll": null,
                            "appInfo": null,
                            "faces": 'hello'
                        },
                        "view": "",
                        "createTime": "1504188516279",
                        "sendTime": "1504188516277",
                        "isRealTime": false,
                        "options": [],
                        "msgTemplate": "SVR_NOTIFY",
                        "clientMsgID": "0",
                        "notifyText": null,
                        "compatibleText": null,
                        "extra": null,
                        "msgId": "1577255977646041297",
                        "tags": [],
                        "lastUpdateTime": "1504188516277",
                        "fromType": 2,
                        "persistLevel": null,
                        "msgEngines": [
                            {
                                "linear": null,
                                "simpleRM": null,
                                "file": null,
                                "voice": null,
                                "notify": {
                                    "version": 1,
                                    "contentId": "N"
                                }
                            }
                        ]
                    },
                    {
                        "fromId": "0",
                        "fromName": "HI",
                        "receivers": [
                            {
                                "toType": 4,
                                "toId": "2100000358",
                                "msgSeq": "1",
                                "previousMsgSeq": "0",
                                "mainReceiver": null,
                                "subType": 2
                            }
                        ],
                        "content": {
                            "images": [],
                            "voices": [],
                            "files": [],
                            "texts": [],
                            "urls": [],
                            "datas": [],
                            "ats": [],
                            "sysNotify": {
                                "notifyType": 4,
                                "notifyData": {
                                    "groupInfo": {
                                        "gid": "2100000358",
                                        "headMD5": "",
                                        "desc": "",
                                        "bulletin": "",
                                        "name": "swr test",
                                        "tag": "",
                                        "uClass1": 0,
                                        "uClass2": 0,
                                        "corpId": 1,
                                        "friendlyLevel": 1,
                                        "openLevel": 1,
                                        "createTime": "1504188826565",
                                        "ownerCorpId": 1,
                                        "groupType": 2,
                                        "parentGid": "0",
                                        "autoName": false,
                                        "lastUpdateTime": "1504188826565",
                                        "ownerGid": "0",
                                        "topicContent": "swr create topicContent",
                                        "digest": null,
                                        "uid": "40000355",
                                        "topicTypeExtensionId": "",
                                        "groupStatus": 1,
                                        "contentFiles": [],
                                        "contentImages": [],
                                        "onlyOwnerAllowModify": false,
                                        "lastActiveTime": "0"
                                    }
                                },
                                "notifyId": "N"
                            },
                            "extContent": [],
                            "atAll": null,
                            "appInfo": null,
                            "faces": {}
                        },
                        "view": "",
                        "createTime": "1504188826583",
                        "sendTime": "1504188826581",
                        "isRealTime": false,
                        "options": [],
                        "msgTemplate": "SVR_NOTIFY",
                        "clientMsgID": "0",
                        "notifyText": null,
                        "compatibleText": null,
                        "extra": null,
                        "msgId": "1577256303023340313",
                        "tags": [],
                        "lastUpdateTime": "1504188826581",
                        "fromType": 2,
                        "persistLevel": null,
                        "msgEngines": [
                            {
                                "linear": null,
                                "simpleRM": null,
                                "file": null,
                                "voice": null,
                                "notify": {
                                    "version": 1,
                                    "contentId": "N"
                                }
                            }
                        ]
                    },
                    {
                        "fromId": "0",
                        "fromName": "HI",
                        "receivers": [
                            {
                                "toType": 4,
                                "toId": "2100000359",
                                "msgSeq": "1",
                                "previousMsgSeq": "0",
                                "mainReceiver": null,
                                "subType": 2
                            }
                        ],
                        "content": {
                            "images": [],
                            "voices": [],
                            "files": [],
                            "texts": [],
                            "urls": [],
                            "datas": [],
                            "ats": [],
                            "sysNotify": {
                                "notifyType": 4,
                                "notifyData": {
                                    "groupInfo": {
                                        "gid": "2100000359",
                                        "headMD5": "",
                                        "desc": "",
                                        "bulletin": "",
                                        "name": "swr test",
                                        "tag": "",
                                        "uClass1": 0,
                                        "uClass2": 0,
                                        "corpId": 1,
                                        "friendlyLevel": 1,
                                        "openLevel": 1,
                                        "createTime": "1504189196589",
                                        "ownerCorpId": 1,
                                        "groupType": 2,
                                        "parentGid": "0",
                                        "autoName": false,
                                        "lastUpdateTime": "1504189196589",
                                        "ownerGid": "0",
                                        "topicContent": "swr create topicContent",
                                        "digest": null,
                                        "uid": "40000355",
                                        "topicTypeExtensionId": "",
                                        "groupStatus": 1,
                                        "contentFiles": [],
                                        "contentImages": [],
                                        "onlyOwnerAllowModify": false,
                                        "lastActiveTime": "0"
                                    }
                                },
                                "notifyId": "N"
                            },
                            "extContent": [],
                            "atAll": null,
                            "appInfo": null,
                            "faces": {}
                        },
                        "view": "",
                        "createTime": "1504189196605",
                        "sendTime": "1504189196603",
                        "isRealTime": false,
                        "options": [],
                        "msgTemplate": "SVR_NOTIFY",
                        "clientMsgID": "0",
                        "notifyText": null,
                        "compatibleText": null,
                        "extra": null,
                        "msgId": "1577256691019856650",
                        "tags": [],
                        "lastUpdateTime": "1504189196603",
                        "fromType": 2,
                        "persistLevel": null,
                        "msgEngines": [
                            {
                                "linear": null,
                                "simpleRM": null,
                                "file": null,
                                "voice": null,
                                "notify": {
                                    "version": 1,
                                    "contentId": "N"
                                }
                            }
                        ]
                    },
                    {
                        "fromId": "0",
                        "fromName": "HI",
                        "receivers": [
                            {
                                "toType": 4,
                                "toId": "2100000360",
                                "msgSeq": "1",
                                "previousMsgSeq": "0",
                                "mainReceiver": null,
                                "subType": 2
                            }
                        ],
                        "content": {
                            "images": [],
                            "voices": [],
                            "files": [],
                            "texts": [],
                            "urls": [],
                            "datas": [],
                            "ats": [],
                            "sysNotify": {
                                "notifyType": 4,
                                "notifyData": {
                                    "groupInfo": {
                                        "gid": "2100000360",
                                        "headMD5": "",
                                        "desc": "",
                                        "bulletin": "",
                                        "name": "swr test",
                                        "tag": "",
                                        "uClass1": 0,
                                        "uClass2": 0,
                                        "corpId": 1,
                                        "friendlyLevel": 1,
                                        "openLevel": 1,
                                        "createTime": "1504195125008",
                                        "ownerCorpId": 1,
                                        "groupType": 2,
                                        "parentGid": "0",
                                        "autoName": false,
                                        "lastUpdateTime": "1504195125008",
                                        "ownerGid": "0",
                                        "topicContent": "swr create topicContent",
                                        "digest": null,
                                        "uid": "40000355",
                                        "topicTypeExtensionId": "",
                                        "groupStatus": 1,
                                        "contentFiles": [],
                                        "contentImages": [],
                                        "onlyOwnerAllowModify": false,
                                        "lastActiveTime": "0"
                                    }
                                },
                                "notifyId": "N"
                            },
                            "extContent": [],
                            "atAll": null,
                            "appInfo": null,
                            "faces": {}
                        },
                        "view": "",
                        "createTime": "1504195125037",
                        "sendTime": "1504195125031",
                        "isRealTime": false,
                        "options": [],
                        "msgTemplate": "SVR_NOTIFY",
                        "clientMsgID": "0",
                        "notifyText": null,
                        "compatibleText": null,
                        "extra": null,
                        "msgId": "1577262907430977331",
                        "tags": [],
                        "lastUpdateTime": "1504195125031",
                        "fromType": 2,
                        "persistLevel": null,
                        "msgEngines": [
                            {
                                "linear": null,
                                "simpleRM": null,
                                "file": null,
                                "voice": null,
                                "notify": {
                                    "version": 1,
                                    "contentId": "N"
                                }
                            }
                        ]
                    },
                    {
                        "fromId": "0",
                        "fromName": "HI",
                        "receivers": [
                            {
                                "toType": 4,
                                "toId": "2100000361",
                                "msgSeq": "1",
                                "previousMsgSeq": "0",
                                "mainReceiver": null,
                                "subType": 2
                            }
                        ],
                        "content": {
                            "images": [],
                            "voices": [],
                            "files": [],
                            "texts": [],
                            "urls": [],
                            "datas": [],
                            "ats": [],
                            "sysNotify": {
                                "notifyType": 4,
                                "notifyData": {
                                    "groupInfo": {
                                        "gid": "2100000361",
                                        "headMD5": "",
                                        "desc": "",
                                        "bulletin": "",
                                        "name": "swr test",
                                        "tag": "",
                                        "uClass1": 0,
                                        "uClass2": 0,
                                        "corpId": 1,
                                        "friendlyLevel": 1,
                                        "openLevel": 1,
                                        "createTime": "1504195627629",
                                        "ownerCorpId": 1,
                                        "groupType": 2,
                                        "parentGid": "0",
                                        "autoName": false,
                                        "lastUpdateTime": "1504195627629",
                                        "ownerGid": "0",
                                        "topicContent": "swr create topicContent",
                                        "digest": null,
                                        "uid": "40000355",
                                        "topicTypeExtensionId": "",
                                        "groupStatus": 1,
                                        "contentFiles": [],
                                        "contentImages": [],
                                        "onlyOwnerAllowModify": false,
                                        "lastActiveTime": "0"
                                    }
                                },
                                "notifyId": "N"
                            },
                            "extContent": [],
                            "atAll": null,
                            "appInfo": null,
                            "faces": {}
                        },
                        "view": "",
                        "createTime": "1504195627710",
                        "sendTime": "1504195627709",
                        "isRealTime": false,
                        "options": [],
                        "msgTemplate": "SVR_NOTIFY",
                        "clientMsgID": "0",
                        "notifyText": null,
                        "compatibleText": null,
                        "extra": null,
                        "msgId": "1577263434522511378",
                        "tags": [],
                        "lastUpdateTime": "1504195627709",
                        "fromType": 2,
                        "persistLevel": null,
                        "msgEngines": [
                            {
                                "linear": null,
                                "simpleRM": null,
                                "file": null,
                                "voice": null,
                                "notify": {
                                    "version": 1,
                                    "contentId": "N"
                                }
                            }
                        ]
                    },
                    {
                        "fromId": "0",
                        "fromName": "HI",
                        "receivers": [
                            {
                                "toType": 4,
                                "toId": "2100000362",
                                "msgSeq": "1",
                                "previousMsgSeq": "0",
                                "mainReceiver": null,
                                "subType": 2
                            }
                        ],
                        "content": {
                            "images": [],
                            "voices": [],
                            "files": [],
                            "texts": [],
                            "urls": [],
                            "datas": [],
                            "ats": [],
                            "sysNotify": {
                                "notifyType": 4,
                                "notifyData": {
                                    "groupInfo": {
                                        "gid": "2100000362",
                                        "headMD5": "",
                                        "desc": "",
                                        "bulletin": "",
                                        "name": "swr test",
                                        "tag": "",
                                        "uClass1": 0,
                                        "uClass2": 0,
                                        "corpId": 1,
                                        "friendlyLevel": 1,
                                        "openLevel": 1,
                                        "createTime": "1504195800165",
                                        "ownerCorpId": 1,
                                        "groupType": 2,
                                        "parentGid": "0",
                                        "autoName": false,
                                        "lastUpdateTime": "1504195800165",
                                        "ownerGid": "0",
                                        "topicContent": "swr create topicContent",
                                        "digest": null,
                                        "uid": "40000355",
                                        "topicTypeExtensionId": "",
                                        "groupStatus": 1,
                                        "contentFiles": [],
                                        "contentImages": [],
                                        "onlyOwnerAllowModify": false,
                                        "lastActiveTime": "0"
                                    }
                                },
                                "notifyId": "N"
                            },
                            "extContent": [],
                            "atAll": null,
                            "appInfo": null,
                            "faces": {}
                        },
                        "view": "",
                        "createTime": "1504195800180",
                        "sendTime": "1504195800178",
                        "isRealTime": false,
                        "options": [],
                        "msgTemplate": "SVR_NOTIFY",
                        "clientMsgID": "0",
                        "notifyText": null,
                        "compatibleText": null,
                        "extra": null,
                        "msgId": "1577263615369964503",
                        "tags": [],
                        "lastUpdateTime": "1504195800178",
                        "fromType": 2,
                        "persistLevel": null,
                        "msgEngines": [
                            {
                                "linear": null,
                                "simpleRM": null,
                                "file": null,
                                "voice": null,
                                "notify": {
                                    "version": 1,
                                    "contentId": "N"
                                }
                            }
                        ]
                    }
                ],
                "quitGids": [],
                "existMore": true
            },
            "code": 200,
            "info": "GetList Success"
        }), -1)
    });
});