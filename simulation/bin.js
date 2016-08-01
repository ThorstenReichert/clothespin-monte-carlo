'use strict';

module.exports = function (wagner) {

    return wagner.invoke(function (Config) {

        return function (sum, pos) {
            let i = Math.floor(pos / Config.sim.bin);
            sum[i] += 1;
        };

    });

};