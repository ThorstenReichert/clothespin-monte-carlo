'use strict';

module.exports = function (wagner) {

    return wagner.invoke(function (Config) {

        return function (res, pos) {
            let i = Math.floor(pos / Config.sim.bin);
            res[i] += 1;
        };

    });

};