function dice(n) {
    return Math.floor(Math.random() * n);
}

function choice(array) {
    return array[dice(array.length)];
}

function sample() {
    return choice(arguments);
}

function Level(id, name, goals, threshold0, threshold1, cells) {
    this.id = id;
    this.name = name;
    this.goals = goals;
    this.threshold0 = threshold0;
    this.threshold1 = threshold1;
    this.cells = cells;
}

Level.createRandom = function (id, n) {
    return new Level(id, id, [Level.randomGoal()], Level.randomThreshold0(), Level.randomThreshold1(), Level.randomCells(n));
};

Level.randomGoal = function () {
    return [sample('deutron', 'triton'), sample(1, 2, 3)];
};

Level.randomThreshold0 = function () {
    return sample(1000, 1200, 1300);
};

Level.randomThreshold1 = function () {
    return sample(1600, 1700, 2100);
};

Level.randomCells = function (n) {
    var cells = [];

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < n; j++) {
            cells.push({x: i, y: j, gene: ['f', 'm'].random()});
        }
    }

    return cells;
};

var lvPt = Level.prototype;

lvPt.toObject = function () {
    return {
        id: this.id,
        name: this.name,
        goals: this.goals,
        threshold0: this.threshold0,
        threshold1: this.threshold1,
        cells: this.cells
    };
};

module.exports = Level;
