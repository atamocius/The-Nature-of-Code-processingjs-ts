/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_04_a;
(function (NOC_I_04_a) {
    'use strict';
    NOC_I_04_a.sketch = function (p) {
        p.setup = function () {
            p.size(640, 360);
            p.background(255);
        };
        p.draw = function () {
            // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
            var xloc = p.randomGaussian();
            var sd = 60; // Define a standard deviation
            var mean = p.width / 2; // Define a mean value (middle of the screen along the x-axis)
            xloc = (xloc * sd) + mean; // Scale the gaussian random number by standard deviation and mean
            p.fill(0, 10);
            p.noStroke();
            p.ellipse(xloc, p.height / 2, 16, 16); // Draw an ellipse at our "normal" random position
        };
    };
})(NOC_I_04_a || (NOC_I_04_a = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_04_a.sketch);
//# sourceMappingURL=Sketch.js.map