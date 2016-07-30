'use strict';

module.exports = function (wagner) {

    const config = {};

    config.sim = {};

    // binning width for results
    config.sim.bin = 0.5;

    // length of washing line
    config.sim.length = 100.0;

    // number of pins
    config.sim.pins = 43;

    // # or monte-carlo iterations
    config.sim.steps = 1000;

    // half-width of clothespins
    config.sim.width = 1;

    config.gfx = {};

    // width of the result graph
    config.gfx.width = 100;


    wagner.factory('Config', function () {
        return config;
    });

};