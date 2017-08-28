import React, {Component} from 'react';
import Comp from '../MyComponent';
import {mount} from 'enzyme';
import assert from 'assert';

describe('测试 react', function () {
    it('My component test : not broken', function () {
        mount(<Comp name="world" />);
    });
});