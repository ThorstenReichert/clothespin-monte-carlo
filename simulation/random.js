'use strict';

module.exports = function (wagner) {

    wagner.invoke(function () {

        const random = function (a, b) {
            if (a >= b) {
                throw new Error('Random: interval must have positive length');
            }
            return Math.random() * ( b - a ) + a ;
        };

        wagner.factory('Random', function () {
            return random;
        });

    });

};