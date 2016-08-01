'use strict';

module.exports = function (wagner) {

    const config = {};

    config.node = {};

    // number of worker threads
    config.node.concurrency = 4;

    config.sim = {};

    // binning width for results
    config.sim.bin = 0.01;

    // length of washing line
    config.sim.length = 100.0;

    // number of pins
    config.sim.pins = 22;

    // # or monte-carlo iterations per thread
    config.sim.steps = 1000000;

    // half-width of clothespins
    config.sim.width = 2;

    config.gfx = {};

    // width of console output
    config.gfx.width = 100;

    // percentage of completion after which status is updated
    config.gfx.update = 10;

    config.gpl = {};

    // display style
    config.gpl.style = 'lines';


    wagner.factory('Config', function () {
        return config;
    });

    return config;

};