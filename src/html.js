"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = void 0;
var html = function (strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var template = '';
    strings.map(function (string, idx) {
        var value = typeof values[idx] === 'string' ? "" + values[idx] : '';
        template += "" + string + value;
    }).join('');
    return template;
};
exports.html = html;
