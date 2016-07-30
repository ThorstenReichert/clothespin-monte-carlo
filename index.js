'use strict';

const wagner = require('wagner-core');

// setup config
// has to be first in setup phase
require('./config')(wagner);

// setup random number generator
require('./simulation/random')(wagner);

// setup sort function
require('./simulation/sort')(wagner);

//setup step function
const step = require('./simulation/step')(wagner);

// setup binning function
const bin = require('./simulation/bin')(wagner);

// setup display function
const display = require('./gfx/print')(wagner);

wagner.invoke(function (Config) {
    let sum = [];
    let res = null;
    let n = Math.floor(Config.sim.length / Config.sim.bin);

    for (let i = 0; i < n; i++) {
        sum.push(0);
    }

    for (let i = 0; i < Config.sim.steps; i++) {
        res = step();

        for (let k = 0; k < res.length; k++) {
            bin(sum, res[k]);
        }
    }

    const gnuplot = require('gnu-plot')();
    const data = Array(sum.length);
    for (let i = 0; i < sum.length; i++) {
        data[i] = [i, sum[i]];
    }

    gnuplot.plot([{
        title: 'clothespins',
        //style: 'points pointtype 5 pointsize 0.5',
        data: data
    }]);

});