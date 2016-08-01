'use strict';

const clear = require('cli-clear');
const max = require('../util/max');
const init = require('../util/init-array');

module.exports = function (wagner) {

    return wagner.invoke(function (Config) {

        return function (progress) {
            clear();

            console.log('Currently pinning ');
            console.log(' - ' + Config.sim.pins + ' pins of width ' + Config.sim.width);
            console.log(' - onto a line of length ' + Config.sim.length);
            console.log(' - over ' + Config.node.concurrency + ' * ' + Config.sim.steps + ' iterations');
            console.log('');
            console.log('');
            console.log('progress per worker:');
            console.log('');

            for(let i = 0; i < Config.node.concurrency; i++) {
                let rel = Math.floor((Config.gfx.width - 2) * progress[i]);
                let s = '*' + Array(rel).join('|') + Array(Config.gfx.width - 2 - rel).join(' ') + '*';
                console.log(s);
            }
        };

    });

};