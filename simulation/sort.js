'use strict';

module.exports = function (wagner) {

    wagner.invoke(function (Config) {

        const sort = function (array) {
            array.sort(function (a,b) { return a - b; });
        };

        wagner.factory('Sort', function () {
            return sort;
        });

    });

};