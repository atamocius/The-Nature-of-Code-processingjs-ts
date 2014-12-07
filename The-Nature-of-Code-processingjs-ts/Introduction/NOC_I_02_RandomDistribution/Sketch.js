/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_02;
(function (NOC_I_02) {
    'use strict';
    NOC_I_02.sketch = function (p) {
        // An array to keep track of how often random numbers are picked
        var randomCounts;
        p.setup = function () {
            p.size(640, 240);
            randomCounts = new Array(20);
            for (var i = 0; i < randomCounts.length; i++) {
                randomCounts[i] = 0;
            }
        };
        p.draw = function () {
            p.background(255);
            var index = p.floor(p.random(randomCounts.length));
            randomCounts[index]++;
            p.stroke(0);
            p.fill(175);
            var w = p.width / randomCounts.length;
            for (var x = 0; x < randomCounts.length; x++) {
                p.rect(x * w, p.height - randomCounts[x], w - 1, randomCounts[x]);
            }
        };
    };
})(NOC_I_02 || (NOC_I_02 = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_02.sketch);
//# sourceMappingURL=Sketch.js.map