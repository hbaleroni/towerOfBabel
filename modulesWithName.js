'use strict';

exports.PI = 3.141592;

var _sqrt = (s, x, last) => x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;

exports.sqrt = s => _sqrt(s, s/2.0, 0.0);

exports.square = x => x * x;