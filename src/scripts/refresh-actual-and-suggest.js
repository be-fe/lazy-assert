#!/bin/env node

var utils = require('../utils');
var lib = require('./script-lib');

var basePath = utils.j('.');
lib.refreshAll(basePath);