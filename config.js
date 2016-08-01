'use strict';

module.exports = function (wagner) {

    const config = {};

    config.node = {};

    // number of worker threads
    config.node.concurrency = 3;

    // number of parallel tasks on callstack per worker
    config.node.parallel = 50;

    config.sim = {};

    // binning width for results
    config.sim.bin = 0.01;

    // length of washing line
    config.sim.length = 100.0;

    // number of pins
    config.sim.pins = 22;

    // # or monte-carlo iterations per thread
    config.sim.steps = 10000000;

    // half-width of clothespins
    config.sim.width = 2;

    config.gfx = {};

    // width of console output
    config.gfx.width = 100;

    // [%] of completion after which status is updated
    config.gfx.update = 5;

    // delay intervall for status screen [ms]
    config.gfx.delay = 1000;

    config.gpl = {};

    // display style
    config.gpl.style = 'lines';


    wagner.factory('Config', function () {
        return config;
    });

    return config;

};