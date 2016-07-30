'use strict';

const _ = require('lodash');

module.exports = function (wagner) {

    return wagner.invoke(function (Config, Random, Sort) {

        return function () {
            let res = [];
            let l = Config.sim.length;
            let n = Config.sim.pins;
            let w = Config.sim.width;

            for (let i = 0; i < n; i++) {
                res.push(Random(0.0, l - (2.0 * n * w)));
            }

            Sort(res);

            for (let i = 0; i < n; i++) {
                res[i] = res[i] + ( 2.0 * i + 1.0 ) * w;
            }

            return res;
        };

    });

};