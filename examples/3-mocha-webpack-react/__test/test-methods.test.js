import React, {Component} from 'react';
import Comp from '../MyComponent';
import {mount} from 'enzyme';
import assert from 'assert';

describe('测试 react', function () {
    it('My component test', function () {
        var wrapper = mount(<Comp name="world" />);

        assert.equal(wrapper.find('.wrapper').length, 1);
        assert.equal(wrapper.find('.wrapper h1').text(), 'Hello, world');
        assert.equal(wrapper.html(), '<div><div class="wrapper"><h1><!-- react-text: 4 -->Hello, <!-- /react-text --><!-- react-text: 5 -->world<!-- /react-text --></h1></div></div>');
    });
});