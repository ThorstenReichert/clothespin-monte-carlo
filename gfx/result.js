'use strict';

module.exports = function (wagner) {

    return wagner.invoke(function (Config) {

        return function (timer) {
            let total = Config.sim.steps * Config.node.concurrency;
            let rate = total / timer.diff;

            console.log('');
            console.log('');
            console.log('calculated positions of');
            console.log(' - ' + total + ' pins in ' + Math.floor(timer.diff) + 'ms');
            console.log('');
            console.log('resulting in a rate of');
            console.log(' - ' + rate + ' pins / ms');
            console.log('');
            console.log('');
        };

    });

};