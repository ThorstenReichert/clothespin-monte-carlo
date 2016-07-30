'use strict';

const max = require('../util/max');

module.exports = function (wagner) {

    return wagner.invoke(function (Config) {

        return function (sum) {
            console.log('Result of pinning ');
            console.log(' - ' + Config.sim.pins + ' pins of width ' + Config.sim.width);
            console.log(' - onto a line of length ' + Config.sim.length);
            console.log(' - over ' + Config.sim.steps + ' iterations');
            console.log('');
            console.log('');

            const m = max(sum);

            for (let i = 0; i < sum.length; i++) {
                let rel = Math.floor(Config.gfx.width * sum[i] / m);
                let s = Array(rel).join(' ') + '*';
                console.log('| ' + s);
            }

            let line = Array(Config.gfx.width).join('-');
            console.log(line);
            console.log('relative frequency ->');
        };

    });

};