#! /usr/bin/env node

var uuid = require('node-uuid');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
}

var M = argv.m;
var N = argv.n;

var help = function () {
    var scriptName = path.basename(__filename);

    console.log('Usage: %s -m num -n num', scriptName);
    console.log('For example: %s -m 3 -n 12', scriptName);
};

if (M == null || N == null) {
    help();

    process.exit();
};

var level = {};

level.id = uuid.v1();
level.name = 'no name';

var boms = level.boms = [];

for (var i = 0; i < M; i++) {
    for (var j = 0; j < N; j++) {
        boms.push({x: i, y: j, gender: ['f', 'm'].random()});
    }
}

console.log(JSON.stringify(level, null, 2));
