import React, {Component} from 'react';
import Comp from '../MyComponent';
import {mount} from 'enzyme';
import lazy from '../../../src/index';

describe('测试 react', function () {
    before(function() {
        lazy.setLocation(__filename);
    });

    it('My component test', function () {
        var wrapper = mount(<Comp name="world" />);

        var peek = lazy.newPeek('wrapper');

        peek.set('length', wrapper.find('.wrapper').length);
        peek.set('h1 text', wrapper.find('.wrapper h1').text());
        peek.set('html', wrapper.html());

        peek.assert();
    });
});