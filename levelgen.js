#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var Level = require('./lib/level.js');

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};

var M = 3;
var N = parseInt(argv.n);
var I = argv.i;

var help = function () {
    var scriptName = path.basename(__filename);

    console.log('Usage: %s -i id -n num', scriptName);
    console.log('For example: %s -i 701 -n 12', scriptName);
};

if (!N || !I) {
    help();

    process.exit();
}


var level = {};

level.id = I;
level.name = I;

var kind = ['deutron', 'triton'].random();
var number = [1, 2, 3].random();

level.goals = [[kind, number]];

var cells = level.cells = [];

for (var i = 0; i < M; i++) {
    for (var j = 0; j < N; j++) {
        cells.push({x: i, y: j, gender: ['f', 'm'].random()});
    }
}

var level = Level.createRandom(I, N);

console.log(JSON.stringify(level.toObject(), null, 2));
