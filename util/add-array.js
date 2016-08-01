'use strict';

module.exports = function (arrays) {
    if (arrays.length === 0) {
        return [];
    }

    for (let i = 0; i < arrays.length; i++) {
        if (!Array.isArray(arrays[i])) {
            throw new Error('Add-Array: arrays should be arrays');
        }
        if (arrays[i].length !== arrays[0].length) {
            throw new Error('Add-Array: arrays should have equal length');
        }
    }

    let res = Array(arrays[0].length);

    for (let i = 0; i < arrays[0].length; i++) {
        res[i] = 0;
        for (let j = 0; j < arrays.length; j++) {
            res[i] += arrays[j][i];
        }
    }

    return res;

};