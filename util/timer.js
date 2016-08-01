'use strict';

module.exports = function () {

    function Timer() {
        this.begin = null;
        this.end = null;
        this.diff = null;

        this.start = function () {
            let hrtime = process.hrtime();
            this.begin = hrtime[0] * 1000 + hrtime[1] / 1000000;
        };

        this.stop = function () {
            let hrtime = process.hrtime();
            this.end = hrtime[0] * 1000 + hrtime[1] / 1000000;
            this.diff = this.end - this.begin;
        };

    }

    return new Timer();

};