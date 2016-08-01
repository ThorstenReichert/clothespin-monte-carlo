'use strict';

module.exports = function (wagner) {

    return wagner.invoke(function (Config) {

        return function (gnuplot, sum) {
            const data = Array(sum.length);
            for (let i = 0; i < sum.length; i++) {
                data[i] = [i, sum[i]];
            }

            gnuplot.plot([{
                title: 'clothespins',
                style: 'line',
                data: data
            }]);
        };

    });

};