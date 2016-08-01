'use strict';

const cluster = require('cluster');
const wagner = require('wagner-core');
const init = require('./util/init-array');

// setup config
// has to be first in setup phase
const config = require('./config')(wagner);

// setup random number generator
require('./simulation/random')(wagner);

// setup sort function
require('./simulation/sort')(wagner);

if (cluster.isMaster) {

    const add = require('./util/add-array');
    const plot = require('./gfx/plot')(wagner);
    const status = require('./gfx/status')(wagner);

    let progress = init(config.node.concurrency, 0);
    let sum = init(config.node.concurrency, null);

    for (let i = 0; i < config.node.concurrency; i++) {
        let worker = cluster.fork();

        worker.on('message', function (msg) {
            if (msg.progress) {
                progress[i] = msg.progress;
                status(progress);
            }

            if (msg.sum) {
                sum[i] = msg.sum;
                if (sum.indexOf(null) === -1) {
                    let total = add(sum);

                    const gpl = require('gnu-plot')();
                    plot(gpl, total);
                }
            }
        });
    }

} else {

    const step = require('./simulation/step')(wagner);
    const bin = require('./simulation/bin')(wagner);

    let n = Math.floor(config.sim.length / config.sim.bin);
    let k = Math.floor(config.sim.steps * config.gfx.update / 100);
    let sum = init(n, 0);
    let res = null;

    for (let i = 0; i < config.sim.steps; i++) {
        res = step();

        for (let j = 0; j < res.length; j++) {
            bin(sum, res[j]);
        }

        if ((i % k) === 0) {
            let progress = i / config.sim.steps;
            process.send({progress: progress});
        }
    }

    process.send({
        progress: 1,
        sum: sum
    });

}