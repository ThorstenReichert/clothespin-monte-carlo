'use strict';

module.exports = function (length, value) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(value);
    }
    return res;
};