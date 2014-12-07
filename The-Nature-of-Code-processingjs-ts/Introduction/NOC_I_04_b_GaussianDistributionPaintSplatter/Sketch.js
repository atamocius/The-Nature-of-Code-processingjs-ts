/// <reference path="../../scripts/typings/processing.d.ts" />
/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */
var NOC_I_04_b;
(function (NOC_I_04_b) {
    'use strict';
    NOC_I_04_b.sketch = function (p) {
        p.setup = function () {
            p.size(640, 360);
            p.background(255);
        };
        p.draw = function () {
            var sd = 60; // Define a standard deviation
            var xMean = p.width / 2; // Define a mean value (middle of the screen along the x-axis)
            var yMean = p.height / 2; // Define a mean value (middle of the screen along the y-axis)
            var xloc = p.randomGaussian();
            var yloc = p.randomGaussian();
            var colorSd = 120; // lower the value, the closer the random color is to the mean color
            var colorMean = 255; // 100 means more purple than blue, 0 means vice versa
            var c = p.randomGaussian();
            // Scale the gaussian random number by standard deviation and mean
            xloc = (xloc * sd) + xMean;
            yloc = (yloc * sd) + yMean;
            c = (c * colorSd) + colorMean;
            p.fill(c, 0, 255, 127);
            p.noStroke();
            p.ellipse(xloc, yloc, 16, 16); // Draw an ellipse at our "normal" random position
        };
    };
})(NOC_I_04_b || (NOC_I_04_b = {}));
var canvas = document.getElementById('canvas1');
var processingInstance = new Processing(canvas, NOC_I_04_b.sketch);
//# sourceMappingURL=Sketch.js.map