'use strict';

module.exports = function (array) {
    if (!Array.isArray(array)) {
        throw new Error('Max: argument is not of type Array');
    }

    if (array.length === 0) {
        return null;
    }

    let res = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > res) {
            res = array[i];
        }
    }

    return res;
};